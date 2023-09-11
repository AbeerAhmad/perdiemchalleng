import {ActivityIndicator, ButtonProps} from 'react-native';
import React from 'react';
import {StyledText, StyledWrapper} from './Button.styled';

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}
export const Button = (props: CustomButtonProps) => {
  return (
    <StyledWrapper {...props}>
      {props.loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <StyledText>{props.title}</StyledText>
      )}
    </StyledWrapper>
  );
};
