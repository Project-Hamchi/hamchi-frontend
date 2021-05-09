import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostForm from '../screens/PostForm';
import Camera from '../screens/Camera';
import Preview from '../screens/Preview';

const PostStack = createStackNavigator();

export default function AppNavigator() {

  return (
    <>
      <PostStack.Navigator>
        <PostStack.Screen name="PostForm" component={PostForm} />
        <PostStack.Screen name="Camera" component={Camera} />
        <PostStack.Screen name="Preview" component={Preview} />
      </PostStack.Navigator>
    </>
  );
}
