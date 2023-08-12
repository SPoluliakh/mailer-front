import * as SC from './NotFoundPage.styled';
import { SVG } from '../../images';

export const NotFoundPage = () => {
  return (
    <SC.NotFoundPage>
      <SC.Wrapper>
        <SVG.NotFoundIcon />
      </SC.Wrapper>
      <SC.Text>Try home</SC.Text>
      <SC.Button type="button" to={'/login'}>
        Home
      </SC.Button>
    </SC.NotFoundPage>
  );
};
