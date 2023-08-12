import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Loader } from '../Loader/Loader';
import { ThemeToogle } from '../ThemeToogle/ThemeToogle';
import { ColorToggle } from '../ColorToggle/ColorToggle';

export const Layout = () => {
  return (
    <>
      <ThemeToogle />
      <ColorToggle />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};
