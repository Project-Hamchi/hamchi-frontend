import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../components/shared/Header';
import Preview from './Preview';
import { Camera } from 'expo-camera';
import colors from '../theme/color';

export default function Picture({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [uri, setUri] = useState(null);

  const type = Camera.Constants.Type.back;
  const cameraRef = useRef(null);

  const takePicture = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    setUri(photo.uri);

    navigation.navigate('Preview', { uri: photo.uri, hello: "teset" });
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          ratio={'1:1'}
        >
        </Camera>
      </View >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.snap}
          onPress={takePicture} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    width: '100%'
  },
  buttonContainer: {
    flexGrow: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  snap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: colors.main
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  taken: {
    width: 100,
    height: 180,
    backgroundColor: 'white'
  },
  stretch: {
    width: 120,
    height: 180,
    resizeMode: 'stretch',
  },
});
