import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, Button, TouchableWithoutFeedback, View, StyleSheet, Modal } from 'react-native';

import AdoptCardList from '../components/AdoptCardList';
import FilteredAdoptCardList from '../components/FilteredAdoptCardList';
import Toggle from '../components/shared/Toggle';
import Filter from '../components/Filter';

const Feeds = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isFiltered = useSelector(state => state.post.isFiltered);

  const [filteredScrollPosition, setFilteredScrollPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handlePressCard(post) {
    navigation.navigate(
      'Details',
      { screen: 'Hamster', params: { post: post } }
    );
  }

  function useSelectHamsterType() {
    setIsModalVisible(!isModalVisible);
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
          <Filter title="햄스터 타입" />
          <Button
            title="확인"
            style={[styles.button, styles.buttonClose]}
            onPress={useSelectHamsterType}
          ></Button>
        </View>
      </Modal>
      <View style={styles.filter}>
        <TouchableWithoutFeedback
          onPress={() => {
            setIsModalVisible(!isModalVisible)
          }}
        ><Text style={styles.filterText}>필터 설정</Text>
        </TouchableWithoutFeedback>
        <Toggle />
      </View>
      {
        isFiltered
          ? <FilteredAdoptCardList
            scrollPosition={filteredScrollPosition}
            setScrollPosition={setFilteredScrollPosition}
            onPressCard={handlePressCard}
          />
          : <AdoptCardList
            scrollPosition={scrollPosition}
            setScrollPosition={setScrollPosition}
            onPressCard={handlePressCard}
          />
      }
    </>
  );
};

const styles = StyleSheet.create({
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
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 30,
    paddingBottom: 0,
  },
  filterText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default Feeds;
