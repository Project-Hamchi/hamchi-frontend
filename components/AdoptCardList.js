import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Toggle from './shared/Toggle';
import Modal from './shared/Modal';
import Filter from './Filter';
import AdoptCard from './AdoptCard';
import postAPI from '../api/post';

const PhotoCardList = ({ onPressCard }) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [ids, setIds] = useState({});

  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState({});

  const hamsterTypes = ['골든', '드워프', '로보', '그 외'];
  const [selectedHamsterTypes, setSelectedHamsterTypes] = useState({});

  function handleSelectHamsterType(type) {
    const newTypes = { ...selectedHamsterTypes };

    if (selectedHamsterTypes[type]) {
      delete newTypes[type];
      setSelectedHamsterTypes({ ...newTypes });
    } else {
      newTypes[type] = true;
      setSelectedHamsterTypes({ ...newTypes });
    }
  }

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
    <>
      <Toggle isOn={isFiltered} setIsOn={setIsFiltered} />
      <Filter
        title="햄스터 타입"
        types={hamsterTypes}
        selectedTypes={selectedHamsterTypes}
        onSelectType={handleSelectHamsterType}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
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
    </>
  );
};

const styles = StyleSheet.create({
  left: {
    width: '50%',
    height: 120,
    alignSelf: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  right: {
    width: '50%',
    height: 120,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
});

export default PhotoCardList;
