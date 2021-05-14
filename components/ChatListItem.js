import React, { useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import colors from '../theme/color';

const ChatRoom = ({ user, lastMessage, date }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.user}>{user}</Text>
          <Text style={styles.message}>{lastMessage}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.time}>{date}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10
  },
  leftContainer: {
    flex: 3,
    justifyContent: 'space-around'
  },
  rightContainer: {
    flex: 1,
  },
  user: {
    fontWeight: 'bold',
    fontSize: 16
  },
  message: {
    fontSize: 16,
    color: 'grey',
  },
  time: {
    fontSize: 16,
    color: 'grey'
  }
});

export default ChatRoom;
