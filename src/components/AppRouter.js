import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Shop from '../page/Shop';
import { useContext } from 'react';
import { Context } from '../index';
import NotFound from '../page/NotFound';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};

export default AppRouter;
