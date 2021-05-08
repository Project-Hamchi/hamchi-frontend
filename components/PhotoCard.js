import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import jungle from '../assets/tape/jungle1.png';
import robo from '../assets/tape/robo1.png';
import syrian from '../assets/tape/syrian1.png';
import colors from '../theme/color';

const PhotoCard = ({ type = 1 }) => {
  const labelByTypes = [robo, jungle, syrian];

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.tape}
        source={labelByTypes[type]}
      />
      <View style={styles.card}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.outline,
  },
  tape: {
    width: '40%',
    height: 20,
    top: 12,
    zIndex: 1,
  }
});

export default PhotoCard;
