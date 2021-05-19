import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ActionSheetIOS, View, Text, FlatList, StyleSheet } from 'react-native';

import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import Modal from '../components/shared/Modal';
import Card from '../components/shared/Card';

import enumToString from '../constants/mapEnumToString';

import submissionAPI from '../api/submissions';
import postAPI from '../api/post';
import chatAPI from '../api/chat';
import { useFocusEffect } from '@react-navigation/native';
import colors from '../theme/color';

const MyPosts = () => {
  const myId = useSelector(state => state.user.userId);
  const confirmationMessage = "에게 분양 수락 메시지를 전송합니다";

  const [myPosts, setMyPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSubmissions, setSelectedSubmissions] = useState({});
  const [currentPostSubmissions, setCurrentPostSubmissions] = useState([]);
  const [message, setMessage] = useState("분양 관련 연락드렸습니다 :)");
  const [openedPostsNumber, setOpenedPostsNumber] = useState(0);

  useFocusEffect(
    useCallback(() => {
      getMyPosts();
    }, [])
  );

  function getOpenedPostsNumber() {
    let count = 0;
    for (count = 0; count < myPosts.length; count++) {
      if (myPosts[count].status === 'closed') {
        break;
      }
    }

    return count;
  }

  function compareDateAndStatus(post1, post2) {
    if (post1.status === post2.status) {
      const time1 = new Date(post1.createdAt).getTime();
      const time2 = new Date(post2.createdAt).getTime();

      return time2 - time1;
    } else {
      return post1.status === 'opened' ? -1 : 1;
    }
  }

  function sortPosts(posts) {
    setOpenedPostsNumber(getOpenedPostsNumber(posts));
    return posts.sort(compareDateAndStatus);
  }

  async function getMyPosts() {
    try {
      const response = await postAPI.requestGetMyPosts(myId);

      setMyPosts(sortPosts(response.data.posts));
    } catch (err) {
      console.log(err);
    }
  }

  async function updateSubmissions() {
    try {
      const response = await submissionAPI
        .requestUpdateSubmissionStatus(Object.keys(selectedSubmissions));
      if (response.code === 200) {
        getMyPosts();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function createNewChat() {
    for (let i = 0; i < currentPostSubmissions.length; i++) {
      const submissionId = currentPostSubmissions[i]._id;

      if (selectedSubmissions[submissionId]) {
        const guestId = currentPostSubmissions[i].owner;

        await chatAPI.requestCreateChat(myId, guestId, message);
      }
    }
  }

  async function handleClosePost(postId) {
    try {
      const respose = await postAPI.requestClosePost(postId);
    } catch (err) {
    }
  }

  async function showOptions(postId) {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['취소', '분양 완료하기'],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 0,
      userInterfaceStyle: 'dark'
    },
      buttonIndex => {
        if (buttonIndex === 0) {

        } else if (buttonIndex === 1) {
          handleClosePost(postId);
        }
      })
  }

  function handleSubmissionSelect(submissionId) {
    const newSelectedSubmissions = selectedSubmissions;

    if (selectedSubmissions[submissionId]) {
      delete newSelectedSubmissions[submissionId];
    } else {
      newSelectedSubmissions[submissionId] = true;
    }

    setSelectedSubmissions(newSelectedSubmissions);
  }

  function handleSelectedSubmissions(index) {
    const currentPost = myPosts[index];

    setCurrentPostSubmissions(currentPost.submissions);
    setIsModalVisible(true);
  }

  function handleModalConfirm() {
    updateSubmissions();
    createNewChat();
    setIsModalVisible(false);
  }

  if (!myPosts.length) {
    return (<View></View>)
  }

  return (
    <View style={styles.listContainer}>
      {isModalVisible
        &&
        (Object.keys(selectedSubmissions).length
          ? <Modal
            title="분양 관련 메시지 전송"
            onConfirm={handleModalConfirm}
            onClose={() => setIsModalVisible(false)}
          >
            {currentPostSubmissions.map(item => {
              if (selectedSubmissions[item._id]) {
                return <Text key={item._id}>{item.ownerName}님</Text>
              }
            })}
            <Text>{confirmationMessage}</Text>
            <Input
              value={message}
              onChangeText={setMessage}
            />
          </Modal>
          : <Modal
            title="분양 관련 메시지 전송"
            onConfirm={handleModalConfirm}
            onClose={() => setIsModalVisible(false)}
          >
            <Text>분양 보낼 사용자를 선택해주세요</Text>
          </Modal>

        )}
      <FlatList
        data={myPosts}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          const isSubmissionExist = item.submissions.length ? true : false;

          return (
            <View>
              {(index === 0 || index === openedPostsNumber)
                && <Text style={styles.title}>{enumToString.status[item.status]}</Text>}
              <View style={styles.container}>
                <Card
                  item={item}
                  selected={selectedSubmissions}
                  onSelect={handleSubmissionSelect}
                  showOptions={showOptions}
                />
                {isSubmissionExist
                  ? <Button
                    text="메시지 보내기"
                    type="filled"
                    onPress={() => handleSelectedSubmissions(index)}
                    customButtonStyle={styles.button}
                  />
                  : <View>
                    <Text style={styles.text}>등록된 입양신청서가 없습니다.</Text>
                  </View>
                }
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    // margin: 10,
    // paddingTop: 12,
    paddingBottom: 10,
  },
  container: {
    margin: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 14,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 24,
    paddingBottom: 5,
  },
  text: {
    alignSelf: 'center'
  },
  button: {
    width: 120,
    height: 45,
    alignSelf: 'flex-end',
    margin: 12,
    marginTop: 0,
    borderRadius: 8
  }
});

export default MyPosts;
