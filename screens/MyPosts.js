import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import Header from '../components/shared/Header';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

import submissionAPI from '../api/submissions';
import postAPI from '../api/post';

const MyPosts = ({ navigation }) => {
  const myId = useSelector(state => state.user.userId);
  const [myPosts, setMyPosts] = useState([]);
  const [selectedSubmissions, setSelectedSubmissions] = useState({});

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
      const response = await submissionAPI
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

  function handleSelectedSubmissions() {
    updateSubmissions();
  }

  return (
    <>
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
                onPress={handleSelectedSubmissions}
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
