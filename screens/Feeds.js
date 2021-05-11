import React, { useState, useEffect } from 'react';
import AdoptCardList from '../components/AdoptCardList';
import Header from '../components/shared/Header';
import { useNavigation } from '@react-navigation/native';

const Feeds = ({ navigation }) => {
  // const navigation = useNavigation();
  function handlePressCard(post) {
    console.log(post);
    // navigation.navigate({ screen: 'Hamster', name: 'Hamster', params: { post: post.image } });
    navigation.navigate('Details', { screen: 'Hamster', params: { post: post } });

  }

  return (
    <>
      <Header title="집을 찾아요" />
      <AdoptCardList
        onPressCard={handlePressCard}
      />
    </>
  );
};

export default Feeds;
