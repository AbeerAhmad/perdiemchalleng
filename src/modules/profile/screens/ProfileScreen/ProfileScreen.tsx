import {View} from 'react-native';
import React from 'react';
import {
  ScreenView,
  StyledContainer,
  StyledHeading,
  StyledText,
} from './ProfileScreen.style';
import {ProfileText} from './ProfileScreen.enum';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';

import {logoutUser} from '../../../auth/slice/authSlice';
import {Button} from '../../../../shared/components/Button/Button';

export const ProfileScreen = () => {
  const {user} = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();
  return (
    <ScreenView>
      <StyledContainer>
        <View>
          <StyledHeading>{ProfileText.email}</StyledHeading>
          <StyledText>{user?.email}</StyledText>
        </View>
        <Button
          title="Logout"
          onPress={() => {
            dispatch(logoutUser());
          }}
        />
      </StyledContainer>
    </ScreenView>
  );
};
