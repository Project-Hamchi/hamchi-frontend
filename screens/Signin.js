import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/shared/Button';
import logo from '../assets/png/logo.png';
import colors from '../theme/color';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hamchi</Text>
      <Image
        style={styles.logo}
        source={logo}
      />
      <View style={styles.inputContainer}>
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
        <Button text="로그인" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    padding: 50,
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
  input: {
    margin: 8,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.outline,
  },
});

export default Signin;
