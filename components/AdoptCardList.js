import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AdoptCard from './AdoptCard';

const PhotoCardList = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <ScrollView style={styles.scrollContainer}>
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
  scrollContainer: {
    flexGrow: 0.8,
    height: 300
  },
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
