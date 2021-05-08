import React from 'react';
import { Text } from 'react-native';
import Input from './Input';
import Button from './Button';

const Form = ({ fields }) => {
  const fieldsKeys = Object.keys(fields);

  return (
    <>
      {fieldsKeys.map((key) => {
        const field = fields[key];

        return (
          <>
            <Text>{field.label}</Text>
            <Input
              {...field.inputProps}
              value={field.value}
              onChangeText={field.onChangeText}
            />
          </>
        );
      })}
      <Button type="filled" />
    </>
  );
};

export default Form;
