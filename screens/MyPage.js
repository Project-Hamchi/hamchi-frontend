import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/shared/Button';

import { useDispatch, useSelector } from 'react-redux';
import { clearCredentials } from '../api/secureStore';
import { signOut } from '../reducers/userSlice';

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
      <Text>{username}</Text>
      <Text>{email}</Text>
      <Button
        text="로그아웃"
        type="filled"
        onPress={handleSignoutButtonClick}
        customButtonStyle={{ width: '60%', alignSelf: 'center' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default MyPage;
