import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feeds from './Feeds';
import PostForm from '../components/PostForm';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../theme/color';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case '피드': {
              iconName = 'home-outline'
              break;
            }
            case '신청서': {
              iconName = 'document-outline';
              break;
            }
            case '플러스': {
              iconName = 'add-outline'
              break;
            }
            case '메시지': {
              iconName = 'chatbubble-ellipses-outline';
              break;
            }
            case '내정보': {
              iconName = 'happy-outline';
              break;
            }
          }
          return <Ionicons name={iconName} size={size} color={color} />;

        }
      })}
      tabBarOptions={{
        activeTintColor: colors.main,
        inactiveTintColor: colors.gray,
      }}

    >
      <Tab.Screen name="피드" component={Feeds} />
      <Tab.Screen name="신청서" component={Feeds} />
      <Tab.Screen name="플러스" component={PostForm} />
      <Tab.Screen name="메시지" component={Feeds} />
      <Tab.Screen name="내정보" component={Feeds} />
    </Tab.Navigator>
  );
};

export default Main;
