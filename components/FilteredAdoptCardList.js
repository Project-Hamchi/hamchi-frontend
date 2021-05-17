import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredPosts, selectAllFilteredPosts } from '../reducers/filteredPostSlice';

import { TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import AdoptCard from './AdoptCard';

const FilteredAdoptCardList = ({ onPressCard }) => {
  const dispatch = useDispatch();
  const selectedHamsterTypes = useSelector(state => state.filteredPost.selectedHamsterTypes);
  const page = useSelector(state => state.filteredPost.page);
  const posts = useSelector(selectAllFilteredPosts);

  useEffect(() => {
    dispatch(fetchFilteredPosts({ page, selectedHamsterTypes }))
  }, [selectedHamsterTypes]);

  function handleEndReached() {
    dispatch(fetchFilteredPosts({ page, selectedHamsterTypes }));
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
                {index === posts.length - 1 && <View style={{ paddingBottom: 200 }} />}
              </>
            );
          }}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
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

export default FilteredAdoptCardList;
