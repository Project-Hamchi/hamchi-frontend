import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createError } from '../../../features/userSlice';
import errorMessage from '../../../constants/errorMessage';

import { View, Text } from 'react-native';
import RadioButton from '../RadioButton';
import Button from '../Button';
import Input from '../Input';
import styles from './styles';

const getInitialState = (fieldKeys) => {
  const state = {};

  fieldKeys.forEach((key) => {
    state[key] = '';
  });

  return state;
};

const Form = (props) => {
  const {
    fields,
    action,
    afterSubmit,
    additionalParams
  } = props;

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const username = useSelector(state => state.user.username);

  const fieldsKeys = Object.keys(fields);
  const [values, setValues] = useState(getInitialState(fieldsKeys));

  const onChangeValue = (key, value) => {
    const newState = { ...values, [key]: value };

    setValues(newState);
  };

  const submit = async () => {
    try {
      const response = await action({
        ...values,
        userId,
        username,
        ...additionalParams
      });

      if (response.code === 200) {
        afterSubmit();
      } else {
        dispatch(createError(response.message));
      }

    } catch (err) {
      dispatch(createError(errorMessage.INTERNAL_ERROR));
    }
  };

  return (
    <>
      {fieldsKeys.map((key) => {
        const field = fields[key];

        return (
          <View key={key}>
            <Text style={styles.label}>{field.label}</Text>
            {field.inputType === 'radio'
              ? <RadioButton
                map={field.map}
                options={field.options}
                onChangeOption={(option) => onChangeValue(key, option)}
              />
              : <Input
                value={field.value}
                {...field.inputProps}
                onChangeText={(text) => onChangeValue(key, text)}
              />
            }
          </View>
        );
      })}
      <Button
        text="??????"
        type="filled"
        onPress={submit}
        customButtonStyle={styles.button}
      />
    </>
  );
};

export default Form;
