import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, FlatList } from 'react-native';

import Header from '../components/shared/Header';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import Modal from '../components/shared/Modal';
import Card from '../components/shared/Card';

import submissionAPI from '../api/submissions';
import postAPI from '../api/post';

const MyPosts = () => {
  const myId = useSelector(state => state.user.userId);
  const confirmationMessage = "에게 분양 수락 메시지를 전송합니다";

  const [myPosts, setMyPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSubmissions, setSelectedSubmissions] = useState({});
  const [currentPostSubmissions, setCurrentPostSubmissions] = useState([]);
  const [message, setMessage] = useState("분양 관련 연락드렸습니다 :)");


  useEffect(() => {
    getMyPosts();
  }, []);

  async function getMyPosts() {
    try {
      const response = await postAPI.requestGetMyPosts(myId);

      setMyPosts(response.data.posts);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateSubmissions() {
    try {
      await submissionAPI
        .requestUpdateSubmissionStatus(Object.keys(selectedSubmissions));
    } catch (err) {
      console.log(err);
    }
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
    setIsModalVisible(false);
  }

  return (
    <>
      {isModalVisible
        && <Modal
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
        </Modal>}
      <Header title="신청 현황" />
      <FlatList
        data={myPosts}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return (
            <>
              <Card
                image={item.image}
                name={item.name}
                content={item.submissions}
                selected={selectedSubmissions}
                onSelect={handleSubmissionSelect}
              />
              <Button
                text="메시지 보내기"
                type="filled"
                onPress={() => handleSelectedSubmissions(index)}
                customButtonStyle={{
                  width: 120,
                  height: 45,
                  alignSelf: 'flex-end',
                  marginTop: 10,
                  borderRadius: 8
                }}
              />
            </>
          );
        }}
      />
    </>
  );
};

export default MyPosts;
