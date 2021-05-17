import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

import io from 'socket.io-client';
import { SERVER_URL } from '@env';
import { formatTime } from '../utils';
import colors from '../theme/color';

const ENDPOINT = SERVER_URL;

const ChatRoom = () => {
  const route = useRoute();
  const userId = useSelector(state => state.user.userId);
  const username = useSelector(state => state.user.username);
  const listViewRef = useRef(null);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(route.params.messageId);

  useEffect(() => {
    listViewRef.current.scrollToEnd({ animated: false });
  }, [messages]);

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
      socket.off('sendChatRoom');
      socket.off('sendMessage');
    }
  }, []);

  function handleSubmitMessage() {
    const socket = io(ENDPOINT);

    socket.emit(
      'sendMessage',
      { roomId: messageId, message, userId, username }
    );
    setMessage('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <ScrollView ref={listViewRef}>
          {messages.map((item) => {
            const isCurrentUser = item.user.id === userId ? true : false;
            const time = new Date(item.time);

            return (
              <View
                key={item._id}
                style={isCurrentUser ? styles.rightMessage : styles.leftMessage}
              >
                <Text>{item.message}</Text>
                <View>
                  <Text
                    style={isCurrentUser ? styles.rightTime : styles.leftTime}
                  >{formatTime(time)}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInput}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="전송"
            onPress={handleSubmitMessage}
            style={styles.button}
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
    backgroundColor: colors.white,
    height: '100%'
  },
  chatContainer: {
    height: '90%',
  },
  inputContainer: {
    flexDirection: 'row',
    height: '10%',
    alignSelf: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.outline
  },
  textInput: {
    flex: 3
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 36,
    width: '5%'
  },
  leftMessage: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    padding: 15,
    margin: 10,
    backgroundColor: colors.sub
  },
  rightMessage: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    borderTopRightRadius: 0,
    padding: 15,
    margin: 10,
    backgroundColor: '#efefef'
  },
  leftTime: {
    alignSelf: 'flex-start'
  },
  rightTime: {
    alignSelf: 'flex-end'
  },
  input: {
    height: 36,
    margin: 10,
    padding: 5,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 20,
    borderColor: colors.outline,
  }
});

export default ChatRoom;
