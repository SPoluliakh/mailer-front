import * as SC from './Navigation.styled';

export const Navigation = () => {
  return (
    <SC.List>
      <SC.Item>
        <SC.Link to="user"> User </SC.Link>
      </SC.Item>
      <SC.Item>
        <SC.Link to="log"> Log </SC.Link>
      </SC.Item>
    </SC.List>
  );
};
