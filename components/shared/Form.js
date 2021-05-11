import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import Input from './Input';
import RadioButton from './RadioButton';

const getInitialState = (fieldKeys) => {
  const state = {};
  fieldKeys.forEach((key) => {
    state[key] = '';
  });

  return state;
};

const Form = ({ additionalParams, fields, action, afterSubmit }) => {
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
      const result = await action({ ...values, userId, username, ...additionalParams });

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
            <Text style={style.label}>{field.label}</Text>
            {field.inputType === 'radio' ?
              <RadioButton
                options={field.options}
                onChangeOption={(option) => onChangeValue(key, option)}
              />
              : <Input
                {...field.inputProps}
                value={field.value}
                onChangeText={(text) => onChangeValue(key, text)}
              />
            }
          </View>
        );
      })}
      <Button onPress={submit} title="저장" />
    </>
  );
};

const style = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  }
});

export default Form;
