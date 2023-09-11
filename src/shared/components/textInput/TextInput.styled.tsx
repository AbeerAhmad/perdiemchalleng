import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
  border-color: ${props => props.theme.Border.lightPrimary};
  border-width: 2px;
  height: 48px;
  border-radius: 16px;
  font-size: 16px;
  padding-horizontal: 12px;
`;

export const StyledLabel = styled.Text`
  font-size: 14;
  margin-bottom: 8;
  font-weight: 300;
`;
