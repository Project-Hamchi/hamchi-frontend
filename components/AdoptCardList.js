import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AdoptCard from './AdoptCard';

const PhotoCardList = () => {
  const arr = Array(5).fill(1);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.left}>
          {arr.map((item) => {
            return (<AdoptCard key={item} />)
          })}
        </View>
        <View style={styles.right}>
          {arr.map((item) => {
            return (<AdoptCard key={item} />)
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  right: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 100,
  }
});

export default PhotoCardList;
