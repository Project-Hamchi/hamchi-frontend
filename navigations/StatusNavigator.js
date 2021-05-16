import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPosts from '../screens/MyPosts';

const StatusStack = createStackNavigator();

export default function DetailNavigator() {
  return (
    <StatusStack.Navigator>
      <StatusStack.Screen name="MyPosts" component={MyPosts} />
    </StatusStack.Navigator>
  );
}
