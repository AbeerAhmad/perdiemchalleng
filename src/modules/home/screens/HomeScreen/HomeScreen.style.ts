import styled from "styled-components/native";

export const ScreenView = styled.SafeAreaView`
  padding: 16px;
  flex: 1;
`;

export const StyledHeading = styled.Text`
  font-size: 32px;
  text-align: center;
  padding: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.Primary?.Text};
`;

export const StyledMovieContainer = styled.Pressable`
  width: 109px;
  height: 160px;
  margin: 4px;
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledSection = styled.View`
  margin-vertical: 10px;
`;

export const SectionHeading = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.Primary?.Text};
`;

export const StyledButton = styled.Pressable`
position: absolute;
bottom: 20px;
right:20px;
background-color: ${props => props.theme.Primary.Fill};
padding: 12px;
border-radius: 20px;
`