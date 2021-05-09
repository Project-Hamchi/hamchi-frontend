import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import colors from '../theme/color';

export default function Preview({ route, navigation }) {
  const uri = route.params.uri;

  return (
    <>
      <Image style={styles.stretch} source={{ uri: uri }}></Image>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.snap}
          onPress={() => { navigation.navigate('PostForm', { uri: uri }) }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexGrow: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  snap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: colors.main
  },
  stretch: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

