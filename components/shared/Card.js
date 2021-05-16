import React from 'react';
import { View, Image, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


import enumToString from '../../constants/mapEnumToString';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../theme/color';

const Card = ({ item, selected, onSelect, showOptions }) => {
  const { _id, image, name, submissions } = item;

  const mapped = enumToString.experienceType;

  return (
    <View>
      <View style={styles.postContainer}>
        <Pressable
          style={styles.icon}
          onPress={() => showOptions(_id)}
        >
          <MaterialCommunityIcons
            name="dots-horizontal-circle"
            size={40}
            color={colors.main}
          />
        </Pressable>
        <Text style={styles.title}>{name}의 입양 신청서 목록</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <Text>신청자 수 {submissions.length}명</Text>
      </View>
      <FlatList
        data={submissions}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return (
            <>
              <View style={styles.submissionContainer}>
                <View style={styles.checkboxContainer}>
                  {item.matched === "false"
                    ? <BouncyCheckbox
                      size={25}
                      fillColor={colors.main}
                      unfillColor="#FFFFFF"
                      isChecked={selected[item._id] ? true : false}
                      iconStyle={{ borderColor: colors.main }}
                      onPress={() => onSelect(item._id)}
                    />
                    : <Text>매칭 완료</Text>
                  }
                </View>
                <Image style={styles.environment} source={{ uri: item.environment }} />
                <View style={styles.textContainer}>
                  <Text>{item.ownerName}님</Text>
                  <Text>사육 경험: {mapped[item.experience]}</Text>
                  <Text>지역: {item.location}</Text>
                  <Text>내용: {item.details}</Text>
                </View>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 170,
    paddingTop: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
  },
  checkbox: {
    width: 10,
    height: 10,
    alignSelf: 'center',
  },
  image: {
    width: '30%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 50,
    marginLeft: 6,
  },
  environment: {
    height: undefined,
    aspectRatio: 1,
    margin: 3,
    borderRadius: 10,
    flex: 4
  },
  textContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  submissionContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 12,
    backgroundColor: colors.white,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
  }
});

export default Card;
