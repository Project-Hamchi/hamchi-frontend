import React, {
  useRef,
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  initFeeds,
  fetchFilteredPosts,
  selectAllFilteredPosts
} from '../../features/filteredPostSlice';
import {
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import AdoptCard from '../AdoptCard';
import styles from './styles';

const FilteredAdoptCardList = (props) => {
  const {
    scrollPosition,
    setScrollPosition,
    onPressCard
  } = props;

  const dispatch = useDispatch();
  const page = useSelector(state => state.filteredPost.page);
  const posts = useSelector(selectAllFilteredPosts);
  const selectedHamsterTypes = useSelector(state => state.filteredPost.selectedHamsterTypes);

  const listRef = useRef(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const offset = scrollPosition;

    listRef.current.scrollToOffset({ offset, animated: false });
    dispatch(fetchFilteredPosts({ page, selectedHamsterTypes }));
  }, [selectedHamsterTypes]);

  function handleEndReached() {
    dispatch(fetchFilteredPosts({ page, selectedHamsterTypes }));
  }

  function handleScroll(e) {
    setScrollPosition(e.nativeEvent.contentOffset.y);
  }

  async function initFilteredPost() {
    dispatch(initFeeds());
    dispatch(fetchFilteredPosts({ page: 1, selectedHamsterTypes }));
  }

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    initFilteredPost()
      .then(() => setIsRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={styles.listContainer}
      >
        <FlatList
          ref={listRef}
          data={posts}
          onScroll={handleScroll}
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
                  && <View style={{ height: 200 }} />
                }
              </>
            );
          }}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </View>
  );
};

export default FilteredAdoptCardList;
