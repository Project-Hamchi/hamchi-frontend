import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, View, StyleSheet, Modal } from 'react-native';

import AdoptCardList from '../components/AdoptCardList';
import FilteredAdoptCardList from '../components/FilteredAdoptCardList';
import Toggle from '../components/shared/Toggle';
import Filter from '../components/Filter';


const Feeds = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isFiltered = useSelector(state => state.post.isFiltered);

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
        <Toggle />
        <Button
          title="필터 설정"
          onPress={() => {
            setIsModalVisible(!isModalVisible)
          }}>
        </Button>
      </View>
      {
        isFiltered
          ? <FilteredAdoptCardList
            onPressCard={handlePressCard}
          />
          : <AdoptCardList
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
  }
});

export default Feeds;
