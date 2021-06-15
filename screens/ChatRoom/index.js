import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enterChat, leaveChat } from '../../features/chatSlice';
import { useRoute } from '@react-navigation/native';

import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import io from 'socket.io-client';
import { SERVER_URL } from '@env';
import { formatTime } from '../../utils';
import styles from './styles';

const ENDPOINT = SERVER_URL;

const ChatRoom = () => {
  const route = useRoute();
  const { chatId, messageId } = route.params;

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const username = useSelector(state => state.user.username);

  const listViewRef = useRef(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    listViewRef.current.scrollToEnd({ animated: false });
  }, [messages]);

  useEffect(() => {
    dispatch(enterChat());
    const socket = io(ENDPOINT);

    socket.emit('join', messageId);

    socket.on('sendChatRoom', (chatRoom) => {
      setMessages(chatRoom.messages);
    });

    socket.on('sendMessage', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.emit(
        'leaveChatRoom',
        { chatId, roomId: messageId },
        () => {
          dispatch(leaveChat());
        }
      );
      socket.off('sendChatRoom');
      socket.off('sendMessage');
    }
  }, []);

  function handleSubmitMessage() {
    const socket = io(ENDPOINT);

    socket.emit(
      'sendMessage', {
      roomId: messageId,
      message,
      userId,
      username
    });
    setMessage('');
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior="padding"
      style={{
        flex: 1,
      }}
      enabled
    >
      <View style={styles.container}>
        <View style={styles.chatContainer}>
          <ScrollView
            ref={listViewRef}>
            {messages.map((item) => {
              const isCurrentUser = item.user.id === userId ? true : false;
              const time = new Date(item.time);

              return (
                <View
                  key={`${item.time}`}
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
    </KeyboardAvoidingView >
  );
};

export default ChatRoom;
