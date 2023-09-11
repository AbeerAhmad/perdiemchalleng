import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  background-color: ${props => props.theme.Primary.Fill};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding-horizontal: 30px;
  padding-bottom: 30px;
  padding-top: 8px;
`;

export const StyledText = styled.Text`
  color: ${props => props.theme.Primary.Text};
`;

export const StyledName = styled.Text`
  color: ${props => props.theme.Primary.Text};
  font-size: 20px;
  font-weight: 600;
`;
