import React from 'react';
import { useSelector } from 'react-redux';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Button from '../../components/shared/Button';
import styles from './styles';

import { formatFullDate } from '../../utils/index';
import mapEnumToString from '../../constants/mapEnumToString';

const Hamster = ({ route, navigation }) => {
  const post = route.params.post;
  const userId = useSelector(state => state.user.userId);

  function handlePress() {
    navigation.navigate('SubmissionForm', { postId: post._id });
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.photo}
        source={{ uri: post.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.date}>{formatFullDate(new Date(post.createdAt))}</Text>
        <View style={styles.field}>
          <Text style={styles.key}>이름</Text>
          <Text style={styles.text}>{post.name}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.field}>
          <Text style={styles.key}>지역</Text>
          <Text style={styles.text}>{post.location}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.field}>
          <Text style={styles.key}>종류</Text>
          <Text style={styles.text}>{mapEnumToString.hamsterType[post.type]}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.field}>
          <Text style={styles.key}>성별</Text>
          <Text style={styles.text}>{mapEnumToString.hamsterGender[post.gender]}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.field}>
          <Text style={styles.key}>개체수</Text>
          <Text style={styles.text}>{post.number}</Text>
        </View>
        <View style={styles.divider} />
        <View style={[styles.field, { flexDirection: 'column' }]}>
          <Text style={styles.key}>세부 사항</Text>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.text]}>{post.details}</Text>
          </View>
        </View>
        {userId !== post.owner && <Button
          type="filled"
          text="입양 신청서 쓰기"
          onPress={handlePress}
        />}
      </View>
    </ScrollView>
  );
};

export default Hamster;
