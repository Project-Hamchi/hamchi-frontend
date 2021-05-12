import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hamster from '../screens/Hamster';
import MyPosts from '../screens/MyPosts';
import Submissions from '../screens/Submissions';

const StatusStack = createStackNavigator();

export default function DetailNavigator() {
  return (
    <StatusStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <StatusStack.Screen name="MyPosts" component={MyPosts} />
      <StatusStack.Screen name="Submissions" component={Submissions} />
    </StatusStack.Navigator>
  );
}
