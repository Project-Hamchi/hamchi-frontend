import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const AuthStack = createStackNavigator();

import AdoptCardList from '../components/AdoptCardList';

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="card">
        <AuthStack.Screen name="card" component={AdoptCardList} />
        <AuthStack.Screen name="Sign in" component={Signin} />
        <AuthStack.Screen name="Sign up" component={Signup} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
