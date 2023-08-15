import styled from 'styled-components';

export const VisitorsList = styled.ul`
  padding: 24px 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  background-color: ${props => props.theme.colors.white};
`;

export const VisitorsListItem = styled.li`
  padding: 8px;
  border: 2px solid ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.grey};
`;
