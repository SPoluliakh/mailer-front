import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 2px solid greenyellow;
`;
