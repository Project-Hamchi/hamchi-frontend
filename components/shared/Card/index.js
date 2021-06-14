import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  Pressable
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import enumToString from '../../../constants/mapEnumToString';
import { formatFullDate } from '../../../utils';
import colors from '../../../theme/color';
import styles from './styles';

const Card = (props) => {
  const {
    item,
    selected,
    onSelect,
    showOptions
  } = props;
  const {
    _id,
    image,
    name,
    submissions,
    createdAt,
    status
  } = item;
  const mapped = enumToString.experienceType;

  return (
    <View>
      <View style={styles.postContainer}>
        {status === 'opened' &&
          <Pressable
            style={styles.icon}
            onPress={() => showOptions(_id)}
          >
            <MaterialCommunityIcons
              name="dots-horizontal-circle"
              size={32}
              color={colors.main}
            />
          </Pressable>}
        <Text style={styles.title}>{name}의 입양 신청서 목록</Text>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
        <Text>{formatFullDate(new Date(createdAt))}</Text>
        <Text>신청자 수 {submissions.length}명</Text>
      </View>
      <FlatList
        data={submissions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
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
                <Image
                  style={styles.environment}
                  source={{ uri: item.environment }}
                />
                <View style={styles.textContainer}>
                  <View style={styles.username}>
                    <Text>{item.ownerName}님의 신청서</Text>
                  </View>
                  <View style={styles.field}>
                    <Text>사육 경험</Text>
                    <Text>{mapped[item.experience]}</Text>
                  </View>
                  <View style={styles.field}>
                    <Text>지역</Text>
                    <Text>{item.location}</Text>
                  </View>
                  <View style={[styles.field, styles.details]}>
                    <Text>내용</Text>
                    <Text>{item.details}</Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default Card;
