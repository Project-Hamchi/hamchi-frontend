import React from 'react';

import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import Form from '../components/shared/Form';
import submissionAPI from '../api/submissions';

const SubmissionForm = ({ route, navigation }) => {
  let photo;
  const postId = route.params.postId;

  if (route.params) {
    photo = route.params.photo;
  }

  function handlePress() {
    photo = null;
    navigation.navigate('Camera', { redirectTo: 'SubmissionForm' });
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
            >
              <Text>미리 준비해두신 햄스터 사육 환경이 있다면 촬영해주세요!</Text>
            </TouchableOpacity>
          }
        </View>
        <Form
          additionalParams={{ photo, postId }}
          fields={{
            experience: {
              label: '햄스터 사육 경험',
              inputType: 'radio',
              options: ['없음', '1번', '2번 이상']
            },
            location: {
              label: '지역',
              inputProps: {
                placeholder: '지역을 입력해주세요'
              }
            },
            details: {
              label: '기타',
              inputProps: {
                placeholder: '기타 참고사항을 입력해주세요'
              }
            },
          }}
          action={submissionAPI.requestCreateSubmission}
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

export default SubmissionForm;
