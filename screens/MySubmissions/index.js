import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { createError } from '../../features/userSlice';
import errorMessage from '../../constants/errorMessage';

import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import Empty from '../../components/shared/Empty';
import styles from './styles';

import submissionAPI from '../../api/submissions';
import { formatDate } from '../../utils/index';


const MySubmissions = () => {
  const dispatch = useDispatch();
  const myId = useSelector(state => state.user.userId);
  const [mySubmissions, setMySubmissions] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getMySubmissions();
    }, [])
  );

  function compareDate(post1, post2) {
    const time1 = new Date(post1.createdAt).getTime();
    const time2 = new Date(post2.createdAt).getTime();

    return time2 - time1;
  }

  function sortSubmissions(submissions) {
    return submissions.sort(compareDate);
  }

  async function getMySubmissions() {
    try {
      const response = await submissionAPI.requestGetMySubmissions(myId);

      if (response.code === 200) {
        setMySubmissions(sortSubmissions(response.data.submissions));
      } else {
        dispatch(createError(response.message));
      }
    } catch (err) {
      dispatch(createError(errorMessage.INTERNAL_ERROR));
    }
  }

  async function init() {
    getMySubmissions();
  }

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    init().then(() => setIsRefreshing(false));
  }, []);

  if (mySubmissions !== null && mySubmissions.length === 0) {
    return (
      <Empty
        title="내 신청서 리스트가 존재하지 않습니다"
      />
    );
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
            statusMessage = `매칭되었습니다! \n메시지함을 확인해주세요.`;
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

export default MySubmissions;
