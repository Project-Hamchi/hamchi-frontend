import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AdoptCard from './AdoptCard';

const PhotoCardList = ({ posts }) => {
  const half = Math.ceil(posts.length / 2);
  const leftSidePosts = posts.splice(0, half);
  const rightSidePosts = posts.splice(-half);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.left}>
          {leftSidePosts.map((item) => {
            return (<AdoptCard key={item._id} data={item} />)
          })}
        </View>
        <View style={styles.right}>
          {rightSidePosts.map((item) => {
            return (<AdoptCard key={item._id} data={item} />)
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
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
