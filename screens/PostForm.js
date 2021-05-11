import React from 'react';
import Form from '../components/shared/Form';
import { View, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import postAPI from '../api/post';

const PostForm = ({ route, navigation }) => {
  let photo;

  if (route.params) {
    photo = route.params.photo;
  }

  function handlePress() {
    photo = null;
    navigation.navigate('Camera', { redirectTo: 'PostForm' });
  }

  function handleAfterSubmit() {
    photo = null;
    navigation.navigate('피드');
  }

  return (
    <>
      <ScrollView>
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
          photo={photo}
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
              options: ['남', '여', '미확인']
            },
            type: {
              label: '종',
              inputType: 'radio',
              options: ['Robo', 'Jungle', 'Syrian', 'other']
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
                placeholder: '최소 환경 조건 및 세부사항을 입력하세요'
              }
            }
          }}
          action={postAPI.requestCreatePost}
          afterSubmit={handleAfterSubmit}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
