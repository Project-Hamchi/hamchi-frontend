import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import submissionAPI from '../api/submissions';
import { formatDate } from '../utils/index';

import colors from '../theme/color';

const MySubmissions = () => {
  const myId = useSelector(state => state.user.userId);
  const [mySubmissions, setMySubmissions] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);


  useFocusEffect(
    useCallback(() => {
      getMySubmissions();
    }, [])
  );

  async function getMySubmissions() {
    try {
      const response = await submissionAPI.requestGetMySubmissions(myId);
      setMySubmissions(response.data.submissions);
    } catch (err) {
      console.log(err);
    }
  }

  async function init() {
    getMySubmissions();
  }

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    init().then(() => setIsRefreshing(false));
  }, []);

  if (!mySubmissions.length) {
    return (<View></View>)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>매칭 현황</Text>
      <FlatList
        data={mySubmissions}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          const post = item.postId;
          const matched = item.matched;
          const postStatus = post.status;
          const date = new Date(item.createdAt);
          let statusMessage;

          if (matched === 'true') {
            statusMessage = `매칭되었습니다! \n메시지함을 확인해주세요`;
          } else {
            statusMessage = postStatus === 'opened'
              ? '분양 진행중입니다.'
              : '매칭에 실패했습니다.'
          }

          return (
            <View style={styles.submissionContainer}>
              <View style={styles.leftContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: post.image }}
                />
                <View style={styles.messageContainer}>
                  <Text style={styles.name}>{post.name}</Text>
                  <Text style={styles.message}>{statusMessage}</Text>
                </View>
              </View>
              <View style={styles.rightContainer}>
                <Text>{formatDate(date)}</Text>
              </View>
            </View>
          );
        }}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 12,
    paddingBottom: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  submissionContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 10,
    padding: 10,
    borderRadius: 14,
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'space-around'
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '10%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 56,
    marginLeft: 6,
  },
  messageContainer: {
    flex: 4,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  message: {
    fontSize: 14
  },
  icon: {
    alignSelf: 'center'
  }
});

export default MySubmissions;
