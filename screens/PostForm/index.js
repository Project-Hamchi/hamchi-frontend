import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Form from '../../components/shared/Form';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../theme/color';
import styles from './styles';

import mapEnumToString from '../../constants/mapEnumToString';
import postAPI from '../../api/post';

const PostForm = ({ route, navigation }) => {
  let photo = null;

  if (route.params) {
    photo = route.params.photo;
  }

  function handlePress() {
    photo = null;
    navigation.navigate('Camera', { redirectTo: 'PostForm' });
  }

  function handleAfterSubmit() {
    navigation.reset({
      index: 0,
      routes: [{ name: '피드' }],
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
      enabled
    >
      <KeyboardAwareScrollView>
        <View>
          {photo ?
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: photo.uri }} />
            </View>
            : <TouchableOpacity
              style={styles.container}
              onPress={handlePress}
            >
              <Feather name="camera" size={160} color={colors.bold} />
              <Text style={styles.text}>햄스터 사진 촬영하기</Text>
            </TouchableOpacity>
          }
        </View>
        <Form
          additionalParams={{ photo }}
          fields={{
            name: {
              label: '이름',
              inputProps: {
                placeholder: '햄스터 이름을 입력하세요'
              }
            },
            age: {
              label: '나이',
              inputProps: {
                placeholder: '햄스터 나이(개월 수)를 입력하세요'
              }
            },
            gender: {
              label: '성별',
              inputType: 'radio',
              options: ['male', 'female', 'other'],
              map: mapEnumToString.hamsterGender
            },
            type: {
              label: '햄스터 종류',
              inputType: 'radio',
              options: ['Robo', 'Jungle', 'Syrian', 'other'],
              map: mapEnumToString.hamsterType
            },
            location: {
              label: '지역',
              inputProps: {
                placeholder: '지역을 입력하세요'
              }
            },
            number: {
              label: '개체수',
              inputProps: {
                placeholder: '몇마리 인가요?'
              }
            },
            details: {
              label: '세부사항',
              inputProps: {
                placeholder: '최소 환경 조건 및 세부사항을 입력하세요',
                multiline: true,
                customInputStyle: { height: 100 }
              }
            }
          }}
          action={postAPI.requestCreatePost}
          afterSubmit={handleAfterSubmit}
        />
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

export default PostForm;
