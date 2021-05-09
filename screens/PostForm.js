import React from 'react';
import Header from '../components/shared/Header';
import Form from '../components/shared/Form';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const PostForm = ({ navigation }) => {


  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('Camera') }} />
        </View>
        <Form
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
            gender: {
              label: '성별',
              inputProps: {
                placeholder: '햄스터 성별을 입력하세요'
              }
            },
            location: {
              label: '지역',
              inputProps: {
                placeholder: '지역을 입력하세요'
              }
            },
            details: {
              label: '세부사항',
              inputProps: {
                placeholder: '그 외 세부사항을 입력하세요'
              }
            }
          }}
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
  button: {
    resizeMode: 'stretch',
  }
});

export default PostForm;
