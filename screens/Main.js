import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feeds from './Feeds';
import PostForm from '../components/PostForm';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="CreatePost" component={PostForm} />
    </Tab.Navigator>
  );
};

export default Main;
