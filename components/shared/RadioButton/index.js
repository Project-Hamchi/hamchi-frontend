import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const RadioButton = ({ options, map, onChangeOption }) => {
  const [selectedOption, setSelectedOption] = useState();

  function handleOptionPress(item) {
    setSelectedOption(item);
    onChangeOption(item);
  }

  return (
    <View style={styles.container}>
      {options.map(option => {
        return (
          <TouchableOpacity
            key={option}
            style={selectedOption === option ? styles.option : styles.selectedOption}
            onPress={() => handleOptionPress(option)}
          >
            <Text
              style={selectedOption === option ? styles.text : styles.selectedText}
            >{map[option]}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RadioButton;
