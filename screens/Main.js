import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatusNavigator from '../navigations/StatusNavigator';
import Feeds from './Feeds';
import Post from './Post';
import MyPageNavigator from '../navigations/MyPageNavigator';
import ChatNavigator from '../navigations/ChatNavigator';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/color';
import MyPosts from './MyPosts';

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
            case '신청현황': {
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
      <Tab.Screen name="신청현황" component={StatusNavigator} />
      <Tab.Screen name="플러스" component={Post} />
      <Tab.Screen name="메시지" component={ChatNavigator} />
      <Tab.Screen name="내정보" component={MyPageNavigator} />
    </Tab.Navigator>
  );
};

export default Main;
