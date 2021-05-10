import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Main from '../screens/Main';

const AppStack = createStackNavigator();

export default function AppNavigator() {
  const user = useSelector(state => state.user);
  const isSignedIn = user.isSignedIn;

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
        headerShown: false
      }} >
        {isSignedIn ?
          <>
            <AppStack.Screen name="Main" component={Main} />
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
