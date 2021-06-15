import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styles from './styles';

export default function Picture({ route, navigation }) {
  const cameraRef = useRef(null);
  const { redirectTo } = route.params;

  const [photo, setPhoto] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  const takePicture = async () => {
    const photo = await cameraRef.current.takePictureAsync({
      quality: 0.3,
      base64: true
    });

    setPhoto(photo.base64);
    navigation.navigate(
      'Preview',
      {
        photo: photo,
        redirectTo: redirectTo
      });
  };

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
    return <Text>카메라 접근 권한이 없습니다.</Text>;
  }
  return (
    <>
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ref={cameraRef}
          ratio={'1:1'}
        >
        </Camera>
      </View >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.snap}
          onPress={takePicture}
        />
      </View>
    </>
  );
}
