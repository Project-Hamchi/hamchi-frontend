import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPosts from '../screens/MyPosts';

const StatusStack = createStackNavigator();

export default function DetailNavigator() {
  return (
    <StatusStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <StatusStack.Screen name="MyPosts" component={MyPosts} />
    </StatusStack.Navigator>
  );
}
