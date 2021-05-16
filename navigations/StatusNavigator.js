import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyPosts from '../screens/MyPosts';
import MySubmissions from '../screens/MySubmissions';

const StatusStack = createMaterialTopTabNavigator();

export default function DetailNavigator() {
  return (
    <StatusStack.Navigator>
      <StatusStack.Screen name="MyPosts" component={MyPosts} />
      <StatusStack.Screen name="MySubmissions" component={MySubmissions} />

    </StatusStack.Navigator>
  );
}
