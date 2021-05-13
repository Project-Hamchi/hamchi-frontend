import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Pressable, View, StyleSheet, Text, FlatList, Modal } from 'react-native';

import AdoptCard from './AdoptCard';
import Toggle from './shared/Toggle';
import Filter from './Filter';

import postAPI from '../api/post';

const PhotoCardList = ({ onPressCard }) => {
  const [ids, setIds] = useState({});
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const [isFiltered, setIsFiltered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hamsterTypes = ['Syrian', 'Jungle', 'Robo', 'others'];
  const [selectedHamsterTypes, setSelectedHamsterTypes] = useState({});

  useEffect(() => {
    getPosts();
  }, [isFiltered]);

  function initializeFeeds() {
    setPage(1);
    setPosts([]);
    setIds({});
  }

  function handleEndReached() {
    setIsScrollEnd(true);
    getPosts();
  }

  function handleIsToggleOn() {
    setIsFiltered(!isFiltered);
    initializeFeeds();
  }

  function handleSelectHamsterType(type) {
    const newTypes = { ...selectedHamsterTypes };

    if (selectedHamsterTypes[type]) {
      delete newTypes[type];
    } else {
      newTypes[type] = true;
    }

    setSelectedHamsterTypes({ ...newTypes });
  }

  function useSelectHamsterType() {
    if (isFiltered) {
      initializeFeeds();
    }

    setIsModalVisible(!isModalVisible);
  }

  async function getPosts() {
    try {
      const newIds = {};
      const response = await postAPI.requestGetPosts(
        page,
        isFiltered ? Object.keys(selectedHamsterTypes) : []
      );

      setPage(page + 1);
      setPosts(posts.concat(response.posts));
      setIsScrollEnd(false);

      for (let i = 0; i < response.posts.length; i++) {
        const currentId = response.posts[i]._id;
        newIds[currentId] = i;
      }

      setIds({ ...ids, ...newIds });

    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Filter
            title="햄스터 타입"
            types={hamsterTypes}
            selectedTypes={selectedHamsterTypes}
            onSelectType={handleSelectHamsterType}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={useSelectHamsterType}
          ></Pressable>
        </View>
      </Modal>
      <View style={styles.config}>
        <Toggle isOn={isFiltered} onChangeIsOn={handleIsToggleOn} />
        <Pressable
          onPress={() => {
            setIsModalVisible(!isModalVisible)
          }}>
          <Text>필터 설정</Text>
        </Pressable>
      </View>
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
    height: 130,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  config: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingTop: 12,
    zIndex: 1,
  }
});

export default PhotoCardList;
