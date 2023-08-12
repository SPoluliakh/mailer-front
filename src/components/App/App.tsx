import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { Router } from '../../routsConfig/router';
import { Loader } from '../Loader/Loader';
import { getTheme } from '../../redux/theme/themeReducer';
import {
  ITheme,
  darkblue,
  darkgreen,
  lightblue,
  lightgreen,
} from '../../helpers/theme';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const currentTheme = useSelector(getTheme);

  let choosenTheme: ITheme = lightblue;

  const getNewTheme = (currentTheme: string) => {
    switch (currentTheme) {
      case 'darkblue':
        choosenTheme = darkblue;
        break;
      case 'darkgreen':
        choosenTheme = darkgreen;
        break;
      case 'lightblue':
        choosenTheme = lightblue;
        break;
      case 'lightgreen':
        choosenTheme = lightgreen;
        break;

      default:
        return choosenTheme;
    }
  };

  getNewTheme(currentTheme);

  const { isRefreshing } = useAuth();

  return (
    <>
      <ThemeProvider theme={choosenTheme}>
        {isRefreshing ? <Loader /> : <Router />}
      </ThemeProvider>
    </>
  );
};
