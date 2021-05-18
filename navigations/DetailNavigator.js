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
  return (
    <>
      <DetailStack.Navigator>
        <DetailStack.Screen
          name="Hamster"
          component={Hamster}
          options={{
            title: "분양 정보"
          }}
        />
        <DetailStack.Screen
          name="SubmissionForm"
          component={SubmissionForm}
          options={{
            title: "입양 신청서"
          }}
        />
        <DetailStack.Screen name="Camera" component={Camera} />
        <DetailStack.Screen name="Preview" component={Preview} />
      </DetailStack.Navigator>
    </>
  );
}
