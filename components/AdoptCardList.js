import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AdoptCard from './AdoptCard';
import postAPI from '../api/post';

const PhotoCardList = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await postAPI.requestGetPosts(page);

      setPage(response.currentPage + 1);
      setPosts(posts.concat(response.posts));
      setIsScrollEnd(false);

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
          <View style={index % 2 === 0 ? styles.left : styles.right}>
            <AdoptCard data={item} />
          </View>
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
