import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ChatListItem from '../components/ChatListItem';
import chatAPI from '../api/chat';
import moment from 'moment';

const ChatList = () => {
  const userId = useSelector(state => state.user.userId);
  const [chats, setChats] = useState([]);

  const chatList = [
    {
      chatId: "chat1",
      owner: "보라돌이",
      participant: "뚜비",
      messages: [
        {
          message: "안녕하세요",
          sender: "보라돌이",
          date: moment().format("MMM Do YY")
        }
      ],
    },
    {
      chatId: "chat1",
      owner: "보라돌이",
      participant: "뚜비",
      messages: [
        {
          message: "안녕하세요",
          sender: "보라돌이",
          date: moment().format("MMM Do YY")
        }
      ],
    },
    {
      chatId: "chat1",
      owner: "보라돌이",
      participant: "뚜비",
      messages: [
        {
          message: "안녕하세요",
          sender: "보라돌이",
          date: moment().format("MMM Do YY")
        }
      ],
    },
    {
      chatId: "chat1",
      owner: "보라돌이",
      participant: "뚜비",
      messages: [
        {
          message: "안녕하세요",
          sender: "보라돌이",
          date: moment().format("MMM Do YY")
        }
      ],
    },
    {
      chatId: "chat1",
      owner: "보라돌이",
      participant: "뚜비",
      messages: [
        {
          message: "안녕하세요",
          sender: "보라돌이",
          date: moment().format("MMM Do YY")
        }
      ],
    },
  ];

  useEffect(() => {
    // getMyChats();
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

  return (
    <View>
      <FlatList
        data={chatList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          console.log(item);
          const lastMessageIndex = item.messages.length - 1;
          return (
            <ChatListItem
              user={item.owner}
              lastMessage={item.messages[lastMessageIndex].message}
              date={item.messages[lastMessageIndex].date}
            />
          );
        }}
      />
    </View>
  );
};

export default ChatList;
