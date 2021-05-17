import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../reducers/postSlice';

import { TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import AdoptCard from './AdoptCard';

const PhotoCardList = ({ onPressCard }) => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.post.page);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, []);

  function handleEndReached() {
    dispatch(fetchPosts(page));
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.listContainer}
      >
        <FlatList
          data={posts}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => {
            return (
              <>
                <TouchableOpacity
                  key={item._id}
                  style={index % 2 === 0 ? styles.left : styles.right}
                  onPress={() => { onPressCard(item) }}
                >
                  <AdoptCard data={item} />
                </TouchableOpacity>
                {index === posts.length - 1
                  && <View style={{ paddingBottom: 200 }} />
                }
              </>
            );
          }}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  left: {
    width: '50%',
    height: 130,
    alignSelf: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  right: {
    width: '50%',
    height: 130,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  listContainer: {
    height: '100%',
  }
});

export default PhotoCardList;
