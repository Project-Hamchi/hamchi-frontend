import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import submissionAPI from '../api/submissions';

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
    <View>
      <FlatList
        data={mySubmissions}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          const post = item.postId;
          const matched = item.matched;
          const postStatus = post.status;
          let statusMessage;

          if (matched === 'true') {
            statusMessage = '매칭되었습니다. 메시지함을 확인해주세요';
          } else {
            statusMessage = postStatus === 'opened'
              ? '분양 진행중입니다.'
              : '매칭에 실패했습니다.'
          }

          return (
            <View style={styles.container}>
              <View>
                <Image
                  style={styles.image}
                  source={{ uri: post.image }}
                />
                <Text>{post.name}</Text>
              </View>
              <View>
                <Text>매칭 현황</Text>
                <Text>{statusMessage}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.board,
    margin: 10,
  },
  image: {
    flex: 1,
    width: '28%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 56,
    marginLeft: 6,
  },
});

export default MySubmissions;
