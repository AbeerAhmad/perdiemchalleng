import {
  StyleSheet,
  Text,
  View,
  TextInput as Input,
  TextInputProps,
} from 'react-native';
import React from 'react';
import {StyledLabel, StyledTextInput} from './TextInput.styled';

interface InputProps extends TextInputProps {
  label?: string;
}
export const TextInput = (props: InputProps) => {
  return (
    <View>
      {!!props.label && <StyledLabel>{props.label}</StyledLabel>}

      <StyledTextInput
        {...props}
        style={{borderColor: 'black', borderWidth: 1}}
      />
    </View>
  );
};
