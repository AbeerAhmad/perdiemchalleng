import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  background-color: ${props => props.theme.Primary.Fill};
  border-bottom-left-radius: 40;
  border-bottom-right-radius: 40;
  padding-horizontal: 30;
  padding-bottom: 30;
  padding-top: 8;
`;

export const StyledText = styled.Text`
  color: ${props => props.theme.Primary.Text};
`;

export const StyledName = styled.Text`
  color: ${props => props.theme.Primary.Text};
  font-size: 20;
  font-weight: 600;
`;
