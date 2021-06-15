import React from 'react';
import { View, Text } from 'react-native';
import PhotoCard from '../PhotoCard';
import styles from './styles';

const AdoptCard = ({ data }) => {
  return (
    <View
      style={styles.cardContainer}>
      <PhotoCard
        uri={data.image}
        type={data.type}
      />
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.username}>{data.ownerName}님</Text>
      <View style={styles.divider} />
    </View>
  );
};

export default AdoptCard;
