import React from 'react';
import { View, Text } from 'react-native';
import Input from './Input';

const Form = ({ fields }) => {
  const fieldsKeys = Object.keys(fields);

  return (
    <>
      {fieldsKeys.map((key) => {
        const field = fields[key];

        return (
          <View key={key}>
            <Text>{field.label}</Text>
            <Input
              {...field.inputProps}
              value={field.value}
              onChangeText={field.onChangeText}
            />
          </View>
        );
      })}
    </>
  );
};

export default Form;
