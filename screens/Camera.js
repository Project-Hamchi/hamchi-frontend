import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function Picture() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uri, setUri] = useState(null);
  const cameraRef = useRef(null);

  const takePicture = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    setUri(photo.uri);
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
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={cameraRef}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <TouchableOpacity
              style={styles.snap}
              onPress={takePicture
              }></TouchableOpacity>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
        <View>
          {uri &&
            <View style={styles.buttonContainer}>
              <View style={styles.taken}>
                <Image style={styles.stretch} source={{ uri: uri }} />
              </View>
            </View>
          }
        </View>
      </Camera>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    width: '100%'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
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
    backgroundColor: 'white'
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
