import React, {useState} from 'react';
import {ScreenView, StyledButton} from './HomeScreen.style';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/navigation.props';

import {useAppSelector} from '../../../../store/hooks';

import {PostList} from '../../components/PostList/PostList';
import {CustomBottomSheet} from '../../../../shared/components/BottomSheet/bottomSheet';
import RadioSelection from '../../components/RadioSelection/RadioSelection';
import {ListIcon} from '../../../../shared/icons';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
interface Props {
  navigation: any;
}
export const HomeScreen = ({navigation}: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <ScreenView>
      <CustomBottomSheet show={isOpen} onClose={handleClose}>
        <RadioSelection handleClose={handleClose} />
      </CustomBottomSheet>
      <PostList />
      <StyledButton onPress={handleOpen}>
        <ListIcon />
      </StyledButton>
    </ScreenView>
  );
};
