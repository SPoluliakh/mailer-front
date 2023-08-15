import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { ThemeToogle } from '../ThemeToogle/ThemeToogle';
import { ColorToggle } from '../ColorToggle/ColorToggle';
import { Navigation } from '../Navigation/Navigation';
import * as SC from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <SC.Wrapper>
        <Navigation />
        <ThemeToogle />
        <ColorToggle />
      </SC.Wrapper>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};
