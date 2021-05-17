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
            statusMessage = '매칭되었습니다. 메시지함을 확인해주세요';
          } else {
            statusMessage = postStatus === 'opened'
              ? '분양 진행중입니다.'
              : '매칭에 실패했습니다.'
          }

          return (
            <View style={styles.submissionContainer}>
              <View>
                <Image
                  style={styles.image}
                  source={{ uri: post.image }}
                />
                <Text>{post.name}</Text>
              </View>
              <Text>{statusMessage}</Text>
              <Text>{formatDate(date)}</Text>
            </View>
          );
        }}
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
  submissionContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 10,
    padding: 10,
  },
  image: {
    flex: 1,
    width: '28%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 56,
    marginLeft: 6,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    alignSelf: 'center'
  }
});

export default MySubmissions;
