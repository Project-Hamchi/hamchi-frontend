import React, { useState, useEffect } from 'react';
import AdoptCardList from '../components/AdoptCardList';
import Header from '../components/shared/Header';

const Feeds = ({ navigation }) => {
  function handlePressCard(post) {
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
