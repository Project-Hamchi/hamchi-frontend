import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/color';

const Filter = ({ title, types, selectedTypes, onSelectType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.tagContainer}>
        {types.map(type => {
          return (
            <TouchableOpacity
              style={[
                styles.tag,
                { backgroundColor: selectedTypes[type] ? colors.main : colors.white }
              ]}
              key={type}
              onPress={() => onSelectType(type)}
            >
              <Text style={[
                styles.text,
                { color: selectedTypes[type] ? colors.white : colors.main }
              ]}>{type}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center"
  },
  tagContainer: {
    flexDirection: "row",
  },
  tag: {
    width: 50,
    height: 24,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 3,
  },
  text: {
    fontWeight: "bold",
    alignSelf: "center",
  }
});

export default Filter;
