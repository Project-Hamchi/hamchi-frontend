import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hamster from '../screens/Hamster';
import SubmissionForm from '../screens/SubmissionForm';
import Camera from '../screens/Camera';
import Preview from '../screens/Preview';

const DetailStack = createStackNavigator();

export default function DetailNavigator() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('피드');
  }

  return (
    <>
      <DetailStack.Navigator>
        <DetailStack.Screen
          name="Hamster"
          component={Hamster}
          options={{
            headerRight: () => (
              <Button
                title="확인"
                onPress={handlePress}
              />
            )
          }}
        />
        <DetailStack.Screen name="SubmissionForm" component={SubmissionForm} />
        <DetailStack.Screen name="Camera" component={Camera} />
        <DetailStack.Screen name="Preview" component={Preview} />
      </DetailStack.Navigator>
    </>
  );
}
