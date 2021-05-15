import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

import io from 'socket.io-client';
import { SERVER_URL } from '@env';
import colors from '../theme/color';
const ENDPOINT = SERVER_URL;

const ChatRoom = () => {
  const route = useRoute();
  const userId = useSelector(state => state.user.userId);
  const username = useSelector(state => state.user.username);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(route.params.messageId);

  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.emit('join', messageId);

    socket.on('sendChatRoom', (chatRoom) => {
      setMessages(chatRoom.messages);
    });

    socket.on('sendMessage', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.emit('leaveChatRoom', messageId);
    }
  }, []);

  function handleSubmitMessage() {
    const socket = io(ENDPOINT);

    socket.emit(
      'sendMessage',
      { roomId: messageId, message, userId, username }
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={messages}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            const isCurrentUser = item.user.id === userId ? true : false;

            return (
              <View key={item._id} style={isCurrentUser ? styles.rightMessage : styles.leftMessage}>
                <Text>{item.message}</Text>
                <Text>{item.time}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInput}>
          <Input
            value={message}
            onChangeText={setMessage}
          />
        </View>
        <View style={styles.button}>
          <Button
            text="전송"
            type="filled"
            onPress={handleSubmitMessage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.white
  },
  chatContainer: {
    flex: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    width: 500,
    alignSelf: 'flex-start',
    width: '95%',
  },
  textInput: {
    flex: 3
  },
  button: {
    flex: 1
  },
  leftMessage: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    padding: 12,
    margin: 10,
    backgroundColor: colors.message
  },
  rightMessage: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    borderTopRightRadius: 0,
    padding: 12,
    margin: 10,
    backgroundColor: colors.message
  }
});

export default ChatRoom;
