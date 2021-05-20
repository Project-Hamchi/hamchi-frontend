import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../theme/color';

const Input = ({ multiline, placeholder, value, onChangeText, secureTextEntry, customInputStyle }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      style={[styles.input, customInputStyle]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 13,
    borderWidth: 1,
    textAlign: 'center',
    borderColor: colors.outline,
    borderRadius: 5
  },
});

export default Input;
