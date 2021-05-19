import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initError } from '../reducers/userSlice';
import { View, StyleSheet, Button, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Main from '../screens/Main';
import DetailNavigator from '../navigations/DetailNavigator';

const AppStack = createStackNavigator();

export default function AppNavigator() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isSignedIn = user.isSignedIn;

  const isError = useSelector(state => state.user.isError);
  const errorMessage = useSelector(state => state.user.errorMessage);


  if (isError) {
    Alert.alert(errorMessage);
    dispatch(initError());
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
        headerShown: false
      }} >
        {isSignedIn ?
          <>
            <AppStack.Screen
              name="Main"
              component={Main}
              options={{
                title: "홈"
              }}
            />
            <AppStack.Screen name="Details" component={DetailNavigator} />
          </>
          :
          <>
            <AppStack.Screen name="Sign in" component={Signin} />
            <AppStack.Screen name="Sign up" component={Signup} />
          </>
        }
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
