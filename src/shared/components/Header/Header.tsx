import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StyledContainer, StyledName, StyledText} from './Header.styled';
import {StatusBar} from '../StatusBar/StatusBar';
import {useAppSelector} from '../../../store/hooks';
import {getGreetingByTime} from '../../helpers/greeting';

type Props = {};

export const Header = (props: Props) => {
  const {user} = useAppSelector(state => state.authSlice);

  return (
    <>
      <StatusBar />

      <StyledContainer>
        <StyledText>{`${getGreetingByTime()}`}</StyledText>
        <StyledName>{user.name}</StyledName>
      </StyledContainer>
    </>
  );
};
