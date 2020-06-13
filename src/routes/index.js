import Login from '../views/Login';
import Dashboard from '../views/Dashboard';

const indexRoutes = [
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    authenticated: true,
  },
];

export default indexRoutes;
