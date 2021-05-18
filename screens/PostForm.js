import React from 'react';
import Form from '../components/shared/Form';
import { View, KeyboardAvoidingView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import postAPI from '../api/post';
import mapEnumToString from '../constants/mapEnumToString';

const PostForm = ({ route, navigation }) => {
  let photo = null;

  if (route.params) {
    photo = route.params.photo;
  }

  function handlePress() {
    navigation.navigate('Camera', { redirectTo: 'PostForm' });
  }

  function handleAfterSubmit() {
    photo = null;
    navigation.navigate('신청현황', { screen: '내 분양글' });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
      enabled
    >
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          {photo ?
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: photo.uri }} />
            </View>
            : <TouchableOpacity
              style={styles.container}
              onPress={handlePress}
            />
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

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    backgroundColor: 'gray',
    width: 400,
    height: 300,
    marginBottom: 30,
  },
  stretch: {
    width: '100%',
    height: 300
  }
});

export default PostForm;
