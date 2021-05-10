import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Input from './Input';

const getInitialState = (fieldKeys) => {
  const state = {};
  fieldKeys.forEach((key) => {
    state[key] = '';
  });

  return state;
};

const Form = ({ userId, photo, fields, action, afterSubmit }) => {
  const fieldsKeys = Object.keys(fields);
  const [values, setValues] = useState(getInitialState(fieldsKeys));

  const onChangeValue = (key, value) => {
    const newState = { ...values, [key]: value };
    setValues(newState);
  };

  const getValues = () => {
    return fieldsKeys.sort().map((key) => values[key]);
  };

  const submit = async () => {
    try {
      const result = await action({ ...values, userId, base64: photo });
      afterSubmit();
    } catch (err) {
      console.log(err);
    }
  };

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
              onChangeText={(text) => onChangeValue(key, text)}
            />
          </View>
        );
      })}
      <Button onPress={submit} title="저장" />
    </>
  );
};

export default Form;
