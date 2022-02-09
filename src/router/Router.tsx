import { Page404 } from '../components/pages/Page404';
import { memo, VFC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { homeRoutes } from './HomeRoutes';

export const Router: VFC = memo(() => {
  return (
    <Routes>
      {homeRoutes.map((route) => (
        <Route key={route.path} element={route.children} path={`${route.path}`} />
      ))}
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
});
