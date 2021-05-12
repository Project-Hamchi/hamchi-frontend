import React from 'react';
import { View, Pressable, Image, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../../theme/color';
import enumToString from '../../constants/mapEnumToString';

const Card = ({ image, name, content, onClickCard }) => {
  const mapped = enumToString.experienceType;

  return (
    <Pressable
      style={styles.container}
      onPress={onClickCard}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}의 분양 현황</Text>
        <Text style={styles.text}>{content.length}명</Text>
      </View>
      <FlatList
        data={content}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.submissionContainer}>
              <Image style={styles.environment} source={{ uri: item.environment }} />

              <View style={styles.textContainer}>
                <Text>사육 경험: {mapped[item.experience]}</Text>
                <Text>내용: {item.details}</Text>
                <Text>{item.ownerName}님</Text>
              </View>

            </View>
          );
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    width: '95%',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.main
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 6,
  },
  environment: {
    width: 160,
    height: 160,
    margin: 10,
  },
  textContainer: {
    justifyContent: 'flex-start',
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
  submissionContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '95%'
  }
});

export default Card;
