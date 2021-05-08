import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function HomNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" />
        <Tab.Screen name="Posts" />
        <Tab.Screen name="Camera" />
        <Tab.Screen name="Message" />
        <Tab.Screen name="MyPage" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
