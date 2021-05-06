import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../theme/color';

const Button = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.content}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    margin: 8,
    padding: 15,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: colors.main,
  },
  content: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  }
});

export default Button;
