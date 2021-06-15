import React from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default function Preview({ route, navigation }) {
  const { photo, redirectTo } = route.params;

  return (
    <>
      <Image style={styles.stretch} source={{ uri: photo.uri }} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.snap}
          onPress={() => { navigation.navigate(redirectTo, { photo: photo }) }}
        />
      </View>
    </>
  );
}
