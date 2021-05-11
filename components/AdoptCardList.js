import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AdoptCard from './AdoptCard';
import postAPI from '../api/post';

const PhotoCardList = ({ onPressCard }) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [ids, setIds] = useState({});

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await postAPI.requestGetPosts(page);

      setPage(response.currentPage + 1);
      setPosts(posts.concat(response.posts));
      setIsScrollEnd(false);

      const newIds = {};
      for (let i = 0; i < response.posts.length; i++) {
        const currentId = response.posts[i]._id;
        newIds[currentId] = i;
      }

      setIds({ ...ids, ...newIds });

    } catch (err) {
      console.log("err", err);
    }
  }

  function handleEndReached() {
    setIsScrollEnd(true);
    getPosts();
  }

  return (
    <FlatList
      keyExtractor={(item) => item._id}
      data={posts}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            key={item._id}
            style={index % 2 === 0 ? styles.left : styles.right}
            onPress={() => { onPressCard(item) }}
          >
            <AdoptCard data={item} />
          </TouchableOpacity>
        );
      }}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.8}
    />
  );
};

const styles = StyleSheet.create({
  left: {
    width: '50%',
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'flex-start'
  },
  right: {
    width: '50%',
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'flex-end'
  },
});

export default PhotoCardList;
