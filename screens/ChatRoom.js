import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatAPI from '../api/chat';

const ChatRoom = () => {
  const route = useRoute();
  const { name, messageId } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  async function getMessages() {
    try {
      const response = await chatAPI.requestGetMessages(messageId);

      if (response.code === 200) {
        setMessages(response.data.messages.messages);
      }
    } catch (err) {
    }
  }

  return (
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
  );
};

export default ChatRoom;
