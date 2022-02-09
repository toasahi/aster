import { Page404 } from '../components/pages/Page404';
import { Home } from '../components/pages/Home';

export const homeRoutes = [
  {
    path: '/',
    children: <Home />,
  },
  {
    path: '/*',
    children: <Page404 />,
  },
];
