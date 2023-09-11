import styled from 'styled-components/native';

export const StyledPost = styled.Pressable`
  border-radius: 4px;
  border-color: ${props => props.theme.Border.Grey};
  border-width: 0.5px;
  margin-horizontal: 16px;
  margin-vertical: 8px;
  padding: 8px;
  min-height: 80;
  justify-content: flex-end;
`;

export const StyledTitle = styled.Text`
  font-size: 16;
  font-weight: 600;
  text-align: center;
`;
