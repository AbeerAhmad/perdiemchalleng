import styled from 'styled-components/native';

export const StyledWrapper = styled.TouchableOpacity`
  background-color: ${props => props.theme.Primary.Fill};
  height: 48px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${props => props.theme.Primary.Text};
  font-weight: 600;
  font-size: 16px;
`;
