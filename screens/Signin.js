import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../assets/png/logo.png';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.title}>Hamchi</Text>
      <Image
        style={styles.logo}
        source={logo}
      />
      <TextInput
        style={styles.input}
        placeholder="이메일 주소"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  title: {
    fontSize: 60,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    padding: 12,
    margin: 8,
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'skyblue',
  }
});

export default Signin;
