import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/color';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0.1,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.outline
  },
  title: {
    fontSize: 20,
    margin: 10
  }
});

export default Header;
