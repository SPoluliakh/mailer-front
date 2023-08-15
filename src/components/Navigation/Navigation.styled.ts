import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`;

export const Item = styled.li`
  margin-right: 20px;
`;

export const Link = styled(NavLink)`
  color: ${props => props.theme.colors.grey};
  font-size: 24px;
  text-decoration: none;
  position: relative;
  transition: 300ms linear;

  &::after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: greenyellow;
    scale: 0;
    transition: 300ms linear;
  }

  :hover::after {
    scale: 1;
  }
  &.active::after {
    scale: 1;
  }
`;
