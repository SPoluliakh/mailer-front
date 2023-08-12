import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.lineHeights.l};
  color: ${props => props.theme.colors.grey};
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  border: ${props => props.theme.borders.task};
  border-radius: ${props => props.theme.radii.normal};
  margin-top: ${props => props.theme.space[3]}px;
  padding: 14px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.grey};
  &::placeholder {
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: ${props => props.theme.lineHeights.xl};
    color: ${props => props.theme.colors.white};
    @media (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.m};
    }
  }
`;
