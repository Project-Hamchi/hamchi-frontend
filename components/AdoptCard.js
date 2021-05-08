import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PhotoCard from './PhotoCard';

const AdoptCard = ({ type }) => {
  return (
    <View style={styles.cardContainer}>
      <PhotoCard type={type} />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
  }
});

export default AdoptCard;
