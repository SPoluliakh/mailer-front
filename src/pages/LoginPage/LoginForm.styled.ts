import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.white};
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 335px;
  padding: 40px 24px;
  margin-bottom: 18px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.normal};
  @media (min-width: 768px) {
    width: 480px;
    padding: 40px;
    margin-bottom: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 287px;
  height: 44px;
  padding: 14px;
  margin-top: ${props => props.theme.space[4]}px;

  border: none;
  border-radius: ${props => props.theme.radii.medium};
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white3};

  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.xl};
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:disabled {
    background-color: ${p => p.theme.colors.disabledButton};
  }
  &:disabled:hover {
    background-color: ${p => p.theme.colors.disabledButton};
    color: ${p => p.theme.colors.white};
    cursor: not-allowed;
  }
  &:disabled:focus {
    background-color: ${p => p.theme.colors.disabledButton};
    color: ${p => p.theme.colors.white};
  }
  svg {
    margin-left: ${props => props.theme.space[3]}px;
    width: 18px;
    height: 18px;
  }
  &:hover,
  &:focus {
    background-color: #ffee00;
    color: ${props => props.theme.colors.blue};
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 56px;
    font-size: ${props => props.theme.fontSizes.l};

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const InnerButton = styled.button`
  position: absolute;
  bottom: 104px;
  right: 30px;
  cursor: pointer;
  border: none;
  background: transparent;

  @media (min-width: 768px) {
    bottom: 116px;
    right: 50px;
  }
`;
