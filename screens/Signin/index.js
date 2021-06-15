import React, { useEffect, useState } from 'react';
import { fetchSignin } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import logo from '../../assets/png/logo.png';
import styles from './styles';

import {
  readCredentials
} from '../../api/secureStore';

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    checkCredentialsAndFetch();
  }, []);

  async function checkCredentialsAndFetch() {
    const credentials = await readCredentials();

    if (credentials) {
      dispatch(fetchSignin());
    }
  }

  function handleSubmit() {
    const signinInput = {
      email,
      password
    };

    dispatch(fetchSignin(signinInput));
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.keboardView}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              placeholder="비밀번호"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Button text="로그인"
              type="filled"
              onPress={handleSubmit}
            />
            <Button text="회원가입"
              onPress={() => navigation.navigate('Sign up')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;
