import React from 'react';
import { clearCredentials } from '../../api/secureStore';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../features/userSlice';

import Button from '../../components/shared/Button';
import { View, Text } from 'react-native';
import styles from './styles';

const MyPage = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);
  const email = useSelector(state => state.user.email);

  async function handleSignoutButtonClick() {
    await clearCredentials();
    dispatch(signOut());
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text>이름:{username}</Text>
        <Text>이메일:{email}</Text>
      </View>
      <Button
        text="로그아웃"
        type="filled"
        onPress={handleSignoutButtonClick}
        customButtonStyle={styles.button}
      />
    </View>
  );
};

export default MyPage;
