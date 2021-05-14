import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

import io from 'socket.io-client';
import { SERVER_URL } from '@env';
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
      <Text>{messageId}</Text>
      <View>
        <FlatList
          data={messages}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <View key={item._id}>
                <Text>{item.user.name}</Text>
                <Text>{item.message}</Text>
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
  }
});

export default ChatRoom;
