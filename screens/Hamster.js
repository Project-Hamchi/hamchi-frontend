import React from 'react';
import { Stylesheet, Image, View, Text, StyleSheet } from 'react-native';

const Hamster = ({ route }) => {
  const post = route.params.post;

  return (
    <View>
      <Image
        style={styles.photo}
        source={{ uri: post.image }} />
      <Text>{post.name}</Text>
      <Text>{post.number}</Text>
      <Text>{post.location}</Text>
      <Text>{post.type}</Text>
      <Text>{post.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100
  }
})
export default Hamster;
