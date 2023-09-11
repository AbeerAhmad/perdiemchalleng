import {
  StyleSheet,
  Text,
  View,
  StatusBar as DefaultStatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {StyledContainer} from './StatusBar.styled';

type Props = {};

export const StatusBar = (props: Props) => {
  const STATUSBAR_HEIGHT = DefaultStatusBar.currentHeight;

  return (
    <StyledContainer height={STATUSBAR_HEIGHT}>
      <SafeAreaView>
        <DefaultStatusBar translucent backgroundColor={'red'} {...props} />
      </SafeAreaView>
    </StyledContainer>
  );
};
