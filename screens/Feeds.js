import React from 'react';
import AdoptCardList from '../components/AdoptCardList';

const Feeds = ({ navigation }) => {
  function handlePressCard(post) {
    navigation.navigate('Details', { screen: 'Hamster', params: { post: post } });
  }

  return (
    <AdoptCardList
      onPressCard={handlePressCard}
    />
  );
};

export default Feeds;
