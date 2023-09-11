import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigation/navigation.props';
import {StyledP, StyledScreenView, StyledTitle} from './PostScreen.styled';

export const PostScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const post = route.params?.post;
  return (
    <StyledScreenView>
      <StyledTitle>{post?.title}</StyledTitle>
      <StyledP>{post?.body}</StyledP>
    </StyledScreenView>
  );
};
