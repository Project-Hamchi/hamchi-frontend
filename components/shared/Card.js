import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import enumToString from '../../constants/mapEnumToString';
import colors from '../../theme/color';

const Card = ({ image, name, content, selected, onSelect }) => {
  const mapped = enumToString.experienceType;
  return (
    <View>
      <View style={styles.postContainer}>
        <Text style={styles.title}>{name}의 입양 신청서 목록</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <Text>신청자 수 {content.length}명</Text>
      </View>
      <FlatList
        data={content}
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
    padding: 12,
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
    margin: 12,
    marginTop: 0,
    backgroundColor: colors.white,
  }
});

export default Card;
