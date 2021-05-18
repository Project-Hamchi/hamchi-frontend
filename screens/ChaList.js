import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import ChatListItem from '../components/ChatListItem';
import chatAPI from '../api/chat';

const ChatList = () => {
  const navigation = useNavigation();
  const userId = useSelector(state => state.user.userId);
  const [chats, setChats] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getMyChats();
    }, [])
  );

  async function getMyChats() {
    try {
      const response = await chatAPI.requestGetChats(userId);

      if (response.code === 200) {
        setChats(response.data.chats);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleChatListItemPress(chatId, messageId, partnerName) {
    navigation.navigate(
      'ChatRoom', {
      name: partnerName,
      chatId: chatId,
      messageId: messageId
    });
  }

  return (
    <View>
      <FlatList
        data={chats}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          const owner = item.owner;
          const guest = item.guest;
          const partnerName = owner.id === userId ? guest.name : owner.name;

          const date = item.lastMessage.time;
          const messageId = item.messages;
          const lastMessage = item.lastMessage.message;

          return (
            <ChatListItem
              key={item._id}
              date={date}
              user={partnerName}
              lastMessage={lastMessage}
              onPress={() => handleChatListItemPress(item._id, messageId, partnerName)}
            />
          );
        }}
      />
    </View>
  );
};

export default ChatList;
