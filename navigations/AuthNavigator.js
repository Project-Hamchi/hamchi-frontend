import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Sign in">
        <AuthStack.Screen name="Sign in" component={Signin} />
        <AuthStack.Screen name="Sign up" component={Signup} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
