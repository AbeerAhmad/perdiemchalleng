import styled from 'styled-components/native';

export const StyledScreenView = styled.View``;

export const StyledHeaderSection = styled.View`
  height: 150px;
  background-color: ${props => props.theme.Primary.Fill};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.View`
  padding: 24px;
`;

export const StyledGoogleButton = styled.Pressable`
  margin-top: 24px;
  align-self: center;
`;

export const StyledWelcome = styled.Text`
  font-weight: 700;
  font-size: 36px;
  color: ${props => props.theme.Primary.Text};
`;
export const StyledErrorText = styled.Text`
  font-size: 10px;
`;

export const Spacer = styled.View<{
  width?: number;
  height?: number;
}>`
  width: ${props => props.width ?? 0};
  height: ${props => props.height ?? 0};
`;
