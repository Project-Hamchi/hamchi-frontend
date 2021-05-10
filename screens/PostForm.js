import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/shared/Form';
import { View, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import postAPI from '../api/post';

const PostForm = ({ route, navigation }) => {
  const userId = useSelector(state => state.user.userId);
  let photo;

  if (route.params) {
    photo = route.params.photo;
  }

  function handlePress() {
    photo = null;
    navigation.navigate('Camera');
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
          userId={userId}
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
                placeholder: '햄스터 나이를 입력하세요'
              }
            },
            type: {
              label: '타입',
              inputProps: {
                placeholder: '햄스터 종류를 입력하세요'
              }
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
                placeholder: '그 외 세부사항을 입력하세요'
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
