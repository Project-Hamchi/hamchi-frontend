import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from '../screens/ChaList';

const ChatStack = createStackNavigator();

export default function ChatNavigator() {
  return (
    <>
      <ChatStack.Navigator>
        <ChatStack.Screen name="ChatList" component={ChatList} />
      </ChatStack.Navigator>
    </>
  );
}
