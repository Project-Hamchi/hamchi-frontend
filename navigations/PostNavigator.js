import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostForm from '../screens/PostForm';
import Camera from '../screens/Camera';
import Preview from '../screens/Preview';

const PostStack = createStackNavigator();

export default function PostNavigator() {
  return (
    <>
      <PostStack.Navigator>
        <PostStack.Screen
          name="PostForm"
          component={PostForm}
          options={{
            title: "분양글 작성"
          }}
        />
        <PostStack.Screen
          name="Camera"
          component={Camera}
          options={{
            title: "카메라"
          }}
        />
        <PostStack.Screen
          name="Preview"
          component={Preview}
          options={{
            title: "미리보기"
          }}
        />
      </PostStack.Navigator>
    </>
  );
}
