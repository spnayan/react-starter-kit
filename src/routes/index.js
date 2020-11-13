import Login from '../views/Login';
import Register from '../views/Register';
import Dashboard from '../views/Dashboard';

const indexRoutes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    authenticated: true,
  },
];

export default indexRoutes;
