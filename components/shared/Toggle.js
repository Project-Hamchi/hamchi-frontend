import React, { useState, useRef } from 'react';
import { Animated, View, Text, Pressable, StyleSheet, Easing } from 'react-native';
import colors from '../../theme/color';

const Toggle = ({ isOn, setIsOn, onChangeIsOn }) => {
  const moveAnim = useRef(new Animated.Value(1)).current;
  const moveToggleWheel = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-34, 22]
  });

  const changeWheelWidth = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.25],
  });

  Animated.timing(moveAnim, {
    toValue: isOn ? 1 : 0,
    duration: 120,
    easing: Easing.linear,
    useNativeDriver: true
  }).start();

  return (
    <View>
      <Pressable onPress={onChangeIsOn}>
        <View style={styles.toggleContainer}>
          <Animated.View style={
            [styles.toggleWheel,
            { transform: [{ translateX: moveToggleWheel, scaleX: changeWheelWidth }] },
            ]}>
          </Animated.View>
          <View style={styles.options} >
            <View style={styles.all}>
              <Text style={[styles.text, { color: isOn ? colors.black : colors.main }]}>전체</Text>
            </View>
            <View style={styles.tag}>
              <Text style={[styles.text, { color: isOn ? colors.main : colors.black }]}>관심태그</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View >

  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    position: "relative",
    alignItems: "center",
    width: 121,
    height: 36,
    backgroundColor: colors.outline,
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  toggleWheel: {
    width: 50,
    height: 29,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 14,
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
  options: {
    position: "absolute",
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  all: {
    paddingLeft: 6,
    width: 50,
    textAlign: "center",
  },
  tag: {
    paddingLeft: 1,
    width: 50,
    textAlign: "center",
  },
  text: {
    fontWeight: "bold",
  }
});

export default Toggle;
