import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import PostForm from '../components/PostForm';

const Stack = createStackNavigator();

export default function HomNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="CreatePost" component={PostForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
