import React, { useEffect, useState } from 'react';
import Header from '../components/shared/Header';
import Card from '../components/shared/Card';
import postAPI from '../api/post';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

const MyPosts = ({ navigation }) => {
  const myId = useSelector(state => state.user.userId);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    getMyPosts();
  }, []);

  async function getMyPosts() {
    try {
      const response = await postAPI.requestGetMyPosts(myId);

      setMyPosts(response.data.posts);
    } catch (err) {
      console.log("err", err);
    }
  }

  function handleClickPost(postId) {
    navigation.navigate('Submissions', { postId });
  }

  return (
    <>
      <Header title="신청 현황" />
      <FlatList
        data={myPosts}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return (
            <Card
              image={item.image}
              name={item.name}
              content={item.submissions}
              onClickCard={() => handleClickPost(item._id)}
            />
          );
        }}
      />
    </>
  );
};

export default MyPosts;
