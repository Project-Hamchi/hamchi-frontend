import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostForm from '../screens/PostForm';
import Camera from '../screens/Camera';
import Preview from '../screens/Preview';

const PostStack = createStackNavigator();

export default function PostNavigator() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('피드');
  }

  return (
    <>
      <PostStack.Navigator>
        <PostStack.Screen
          name="PostForm"
          component={PostForm}
          options={{
            headerRight: () => (
              <Button
                title="확인"
                onPress={handlePress}
              />
            )
          }}
        />
        <PostStack.Screen name="Camera" component={Camera} />
        <PostStack.Screen name="Preview" component={Preview} />
      </PostStack.Navigator>
    </>
  );
}
