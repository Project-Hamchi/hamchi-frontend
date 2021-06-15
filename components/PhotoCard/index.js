import React from 'react';
import { View, Image } from 'react-native';
import {
  hamsterTypeList,
  labelByHamsterType
} from '../../constants/hamsterTypes';
import styles from './styles';

const PhotoCard = ({ uri, type }) => {
  let typeIndex;

  if (type === hamsterTypeList[0]) {
    typeIndex = 0;
  } else if (type === hamsterTypeList[1]) {
    typeIndex = 1;
  } else if (type === hamsterTypeList[2]) {
    typeIndex = 2;
  } else {
    typeIndex = 3;
  }

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.tape}
        source={labelByHamsterType[typeIndex]}
      />
      <View style={styles.card}>
        <Image
          style={styles.stretch}
          source={{ uri }}
        />
      </View>
    </View>
  );
};

export default PhotoCard;
