import React from 'react';
import { View, Image, Text } from 'react-native';
import empty from '../../../assets/png/empty.png';
import styles from './styles';

const Empty = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={empty}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Empty;
