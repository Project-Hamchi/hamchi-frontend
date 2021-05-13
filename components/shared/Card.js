import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import enumToString from '../../constants/mapEnumToString';
import colors from '../../theme/color';

const Card = ({ image, name, content, selected, onSelect }) => {
  const mapped = enumToString.experienceType;
  return (
    <>
      <View style={styles.postContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text>{name}의 분양 현황</Text>
          <Text>{content.length}명</Text>
        </View>
      </View>
      <Text>입양 신청서 목록</Text>
      <FlatList
        data={content}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return (
            <>
              <Text>{item.ownerName}님</Text>
              <View style={styles.submissionContainer}>
                <View style={styles.checkboxContainer}>
                  <BouncyCheckbox
                    size={25}
                    fillColor={colors.main}
                    unfillColor="#FFFFFF"
                    isChecked={selected[item._id] ? true : false}
                    iconStyle={{ borderColor: colors.main }}
                    onPress={() => onSelect(item._id)}
                  />
                </View>
                <Image style={styles.environment} source={{ uri: item.environment }} />
                <View style={styles.textContainer}>
                  <Text>사육 경험: {mapped[item.experience]}</Text>
                  <Text>내용: {item.location}</Text>
                  <Text>내용: {item.details}</Text>
                </View>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    width: '95%',
    marginBottom: 10,
    padding: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    width: 10,
    height: 10,
    alignSelf: "center",
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
    margin: 3,
    borderRadius: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  submissionContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10
  }
});

export default Card;
