import routes from '~/configs/routes';
import Home from '~/pages/Home';
import SweetOn from '~/pages/SweetOn';

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.sweetOn,
    component: SweetOn,
  },
];

export { publicRoutes };
