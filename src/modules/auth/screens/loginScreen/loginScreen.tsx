import React from 'react';
import {TextInput} from '../../../../shared/components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {loginAsync} from '../../slice/authAction';

import {
  Spacer,
  StyledContainer,
  StyledErrorText,
  StyledGoogleButton,
  StyledHeaderSection,
  StyledScreenView,
  StyledWelcome,
} from './loginScreen.styled';
import {Button} from '../../../../shared/components/Button/Button';
import {GoogleIcon} from '../../../../shared/icons';
import {StatusBar} from '../../../../shared/components/StatusBar/StatusBar';
import {LoginScreenText} from './loginScreen.enum';
import {useSocialSignin} from '../../../../hooks/useSocialSignin';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .label('Password')
    .required('Please enter your password'),
});
const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const {loading, error} = useAppSelector(state => state.authSlice);

  const {googleSignIn} = useSocialSignin();
  const onSubmit = (values: {email: string; password: string}) => {
    dispatch(loginAsync(values));
  };

  return (
    <StyledScreenView>
      <StatusBar />
      <StyledHeaderSection>
        <StyledWelcome>{LoginScreenText.wc}</StyledWelcome>
      </StyledHeaderSection>
      <StyledContainer>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, values, errors}) => (
            <>
              <TextInput
                label="Email"
                placeholder="Your email"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              {!!errors.email && values.email && (
                <StyledErrorText>{errors.email}</StyledErrorText>
              )}
              <Spacer height={12} />
              <TextInput
                label="Password"
                placeholder="Your password"
                secureTextEntry
                onChangeText={handleChange('password')}
                value={values.password}
              />
              {!!errors.password && values.password && (
                <StyledErrorText>{errors.password}</StyledErrorText>
              )}
              <Spacer height={8} />
              {!!error && <StyledErrorText>{error}</StyledErrorText>}
              <Spacer height={8} />

              <Button
                disabled={!!errors.email && !!errors.password}
                loading={loading}
                title="Login"
                onPress={() => handleSubmit()}
              />
            </>
          )}
        </Formik>
        <StyledGoogleButton onPress={googleSignIn}>
          <GoogleIcon />
        </StyledGoogleButton>
      </StyledContainer>
    </StyledScreenView>
  );
};

export default LoginScreen;
