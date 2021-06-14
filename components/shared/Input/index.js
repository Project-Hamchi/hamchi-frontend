import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Input = (props) => {
  const {
    value,
    multiline,
    placeholder,
    onChangeText,
    secureTextEntry,
    customInputStyle
  } = props;

  return (
    <TextInput
      value={value}
      multiline={multiline}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.input, customInputStyle]}
    />
  );
};

export default Input;
