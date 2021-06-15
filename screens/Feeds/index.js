import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';

import FilteredAdoptCardList from '../../components/FilteredAdoptCardList';
import AdoptCardList from '../../components/AdoptCardList';
import Toggle from '../../components/shared/Toggle';
import Filter from '../../components/Filter';
import styles from './styles';

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
          <View style={styles.modalView}>
            <Filter title="햄스터 타입" />
            <TouchableWithoutFeedback
              onPress={useSelectHamsterType}
            >
              <View style={styles.buttonClose}>
                <Text>확인</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        {!isFiltered
          &&
          <View style={styles.filter}>
            <TouchableWithoutFeedback
              onPress={() => {
                setIsModalVisible(!isModalVisible)
              }}
            ><Text style={styles.filterText}>필터 설정</Text>
            </TouchableWithoutFeedback>
          </View>
        }
        <View style={styles.toggle}>
          <Toggle />
        </View>
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

export default Feeds;
