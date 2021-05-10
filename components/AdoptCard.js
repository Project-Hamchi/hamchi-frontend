import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PhotoCard from './PhotoCard';
import colors from '../theme/color';

const AdoptCard = ({ data }) => {
  return (
    <View style={styles.cardContainer}>
      <PhotoCard
        uri={data.image}
        type={data.type}
      />
      <Text style={styles.text}>{data.name}</Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    alignSelf: 'center',
    marginTop: 10,
    padding: 20,
    height: 80,
  },
  divider: {
    alignSelf: 'center',
    width: '80%',
    height: 1,
    backgroundColor: colors.outline
  }
});

export default AdoptCard;
