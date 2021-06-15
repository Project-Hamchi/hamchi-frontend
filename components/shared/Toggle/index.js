import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../../features/postSlice';
import {
  View,
  Text,
  Easing,
  Animated,
  Pressable
} from 'react-native';
import styles from './styles';

const Toggle = () => {
  const dispatch = useDispatch();
  const isFiltered = useSelector(state => state.post.isFiltered);
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
    toValue: isFiltered ? 1 : 0,
    duration: 120,
    easing: Easing.linear,
    useNativeDriver: true
  }).start();

  function handleSwitchToggle() {
    dispatch(toggleFilter(!isFiltered));
  }

  return (
    <View>
      <Pressable onPress={handleSwitchToggle}
      >
        <View style={styles.toggleContainer}>
          <Animated.View style={[
            styles.toggleWheel,
            {
              transform: [{
                translateX: moveToggleWheel,
                scaleX: changeWheelWidth
              }]
            },
          ]}>
          </Animated.View>
          <View style={styles.options} >
            <View style={styles.all}>
              <Text
                style={[styles.text, isFiltered
                  ? styles.black
                  : styles.main]}
              >전체</Text>
            </View>
            <View style={styles.tag}>
              <Text
                style={[styles.text, isFiltered
                  ? styles.main
                  : styles.black]}
              >관심태그</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View >
  );
};

export default Toggle;
