import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';
import Input from './Input';

const getInitialState = (fieldKeys) => {
  const state = {};
  fieldKeys.forEach((key) => {
    state[key] = '';
  });

  return state;
};

const Form = ({ photo, fields, action, afterSubmit }) => {
  const fieldsKeys = Object.keys(fields);
  const [values, setValues] = useState(getInitialState(fieldsKeys));

  const userId = useSelector(state => state.user.userId);
  const username = useSelector(state => state.user.username);

  const onChangeValue = (key, value) => {
    const newState = { ...values, [key]: value };
    setValues(newState);
  };

  const getValues = () => {
    return fieldsKeys.sort().map((key) => values[key]);
  };

  const submit = async () => {
    try {
      const result = await action({ ...values, userId, username, base64: photo });
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
