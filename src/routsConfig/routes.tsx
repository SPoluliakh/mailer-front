import { lazy } from 'react';
import { Layout } from '../components/Layout/Layout';
import { RestrictedRout } from '../components/RestrictedRoute/RestrictedRoute';
import { PrivateRout } from '../components/PrivateRoute/PrivateRoute';

const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage').then(module => ({
    ...module,
    default: module.LoginPage,
  }))
);

const UserPage = lazy(() =>
  import('../pages/UserPage/UserPage').then(module => ({
    ...module,
    default: module.UserPage,
  }))
);

const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage').then(module => ({
    ...module,
    default: module.NotFoundPage,
  }))
);

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: (
          <RestrictedRout redirectTo="/user" component={<LoginPage />} />
        ),
      },

      {
        path: 'user',
        element: <PrivateRout redirectTo="/login" component={<UserPage />} />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
