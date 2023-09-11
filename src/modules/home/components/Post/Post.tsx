import React from 'react';
import {Post as PostProps} from '../../../../types/homeTypes';
import {StyledPost, StyledTitle} from './Post.styled';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationText} from '../../../../navigation/navigation.enum';
import {RootStackParamList} from '../../../../navigation/navigation.props';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const Post = (props: PostProps) => {
  const navigation = useNavigation<NavigationProps>();

  const onPress = () => {
    navigation.navigate(HomeNavigationText.DetailScreen, {post: props});
  };
  return (
    <StyledPost onPress={onPress}>
      <StyledTitle>{props.title}</StyledTitle>
    </StyledPost>
  );
};
