import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import Button from '../components/shared/Button';

const Hamster = ({ route }) => {
  const post = route.params.post;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.photo}
        source={{ uri: post.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>이름: {post.ownerName}</Text>
        <Text style={styles.text}>이름: {post.name}</Text>
        <Text style={styles.text}>개체수: {post.number}</Text>
        <Text style={styles.text}>지역: {post.location}</Text>
        <Text style={styles.text}>종: {post.type}</Text>
        <Text style={styles.text}>세부 사항: {post.details}</Text>
        <Button type="filled" text="입양 신청서 쓰기" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  textContainer: {
    padding: 12,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    margin: 3,
  }
});

export default Hamster;
