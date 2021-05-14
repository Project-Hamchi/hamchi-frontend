import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import ChatListItem from '../components/ChatListItem';
import chatAPI from '../api/chat';

const ChatList = () => {
  const navigation = useNavigation();
  const userId = useSelector(state => state.user.userId);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getMyChats();
  }, []);

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

  function handleChatListItemPress(messageId, partnerName) {
    navigation.navigate(
      'ChatRoom', {
      name: partnerName,
      messageId: messageId
    });
  }

  return (
    <View>
      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const owner = item.owner;
          const guest = item.guest;
          const partnerName = owner.id === userId ? guest.name : owner.name;

          const date = item.lastMessage.time;
          const messageId = item.messages;
          const lastMessage = item.lastMessage.message;

          return (
            <ChatListItem
              key={item.id}
              date={date}
              user={partnerName}
              lastMessage={lastMessage}
              onPress={() => handleChatListItemPress(messageId, partnerName)}
            />
          );
        }}
      />
    </View>
  );
};

export default ChatList;
