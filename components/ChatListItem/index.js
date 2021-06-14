import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import { formatDate } from '../../utils';

const ChatListItem = (props) => {
  const {
    date,
    user,
    lastMessage,
    onPress
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.user}>{user}</Text>
          <Text style={styles.message}>{lastMessage}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.time}>{formatDate(new Date(date))}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
