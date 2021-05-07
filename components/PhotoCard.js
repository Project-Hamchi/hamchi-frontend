import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import jungle from '../assets/tape/jungle.png';
import robo from '../assets/tape/robo.png';
import syrian from '../assets/tape/syrian.png';
import colors from '../theme/color';

const PhotoCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.tape}
        source={jungle}
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
    width: '40%',
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.outline,
  },
  tape: {
    width: '24%',
    height: 30,
    top: 15,
    zIndex: 1,
  }
});

export default PhotoCard;
