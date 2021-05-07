import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../theme/color';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 8,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.outline,
  },
});

export default Input;
