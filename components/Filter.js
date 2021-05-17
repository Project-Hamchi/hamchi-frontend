import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { addType, deleteType } from '../reducers/filteredPostSlice';

import enumToString from '../constants/mapEnumToString';
import colors from '../theme/color';

const Filter = ({ title, types }) => {

  const dispatch = useDispatch();
  const hamsterTypes = ['Syrian', 'Jungle', 'Robo', 'others'];
  const selectedHamsterTypes = useSelector(state => state.filteredPost.selectedHamsterTypes);
  const mapped = enumToString.hamsterType;

  function handleSelectType(type) {
    if (selectedHamsterTypes[type]) {
      dispatch(deleteType(type));
    } else {
      dispatch(addType(type));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.tagContainer}>
        {hamsterTypes.map(type => {
          return (
            <TouchableOpacity
              style={[
                styles.tag,
                { backgroundColor: selectedHamsterTypes[type] ? colors.main : colors.white }
              ]}
              key={type}
              onPress={() => handleSelectType(type)}
            >
              <Text style={[
                styles.text,
                { color: selectedHamsterTypes[type] ? colors.white : colors.main }
              ]}>{mapped[type]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 35,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.white,
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
