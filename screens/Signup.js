import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import logo from '../assets/png/logo.png';
import userAPI from '../api/user';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit() {
    try {
      const signupInput = {
        email,
        username,
        password,
        confirmPassword
      };

      const response = await userAPI.requestSignup(signupInput);
      if (response.code === 200) {
        navigation.navigate('Sign in');
      }

    } catch (err) {
    }
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hamchi</Text>
      <Image
        style={styles.logo}
        source={logo}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="이메일 주소"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="이름"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Input
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Button text="회원가입"
          type="filled"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    width: 300,
  },
});

export default Signup;
