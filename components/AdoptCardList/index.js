import React, {
  useCallback,
  useEffect,
  useState,
  useRef
} from 'react';
import {
  selectAllPosts,
  fetchPosts,
  initPosts
} from '../../features/postSlice';
import { useDispatch, useSelector } from 'react-redux';

import { TouchableOpacity, View, FlatList } from 'react-native';
import AdoptCard from '../AdoptCard';
import styles from './styles';

const AdoptCardList = (props) => {
  const {
    scrollPosition,
    setScrollPosition,
    onPressCard
  } = props;
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const page = useSelector(state => state.post.page);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const offset = scrollPosition;
    listRef.current.scrollToOffset({ offset, animated: false })

    dispatch(fetchPosts(page));
  }, []);

  function handleScroll(e) {
    setScrollPosition(e.nativeEvent.contentOffset.y);
  }

  function handleEndReached() {
    dispatch(fetchPosts(page));
  }

  async function init() {
    dispatch(initPosts());
  }

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    init().then(() => setIsRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={styles.listContainer}
      >
        <FlatList
          onScroll={handleScroll}
          ref={listRef}
          data={posts}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => {
            return (
              <>
                <TouchableOpacity
                  id={item._id}
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
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </View>
  );
};

export default AdoptCardList;
