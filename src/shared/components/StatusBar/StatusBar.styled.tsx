import styled from 'styled-components/native';

export const StyledContainer = styled.View<{
  height?: number;
}>`
  height: ${props => props.height};
  background-color: ${props => props.theme.Primary.Fill};
`;
