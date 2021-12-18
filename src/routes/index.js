import Login from '../views/Login';
import Register from '../views/Register';
import Dashboard from '../views/Dashboard';
import Users from '../views/Users';
import Topic from '../views/Topic';
import SubTopic from '../views/SubTopic';
import LoaderSample from '../views/LoaderSample';
import KeyHighlights from '../views/KeyHighlights';
import KeyHighlightsDetails from '../views/KeyHighlights/KeyHighlightsDetails';
import Map from '../views/Map';
import Form from '../views/Form';

const indexRoutes = [
  { path: '/login', name: 'Login', component: Login },

  { path: '/register', name: 'Register', component: Register },

  { path: '/users', name: 'Users', component: Users },
  { path: '/keyhighlights/:id', name: 'KeyDetails', component: KeyHighlightsDetails },
  { path: '/keyhighlights', name: 'Key Highlights', component: KeyHighlights },
  { path: '/map', name: 'Map', component: Map },
  { path: '/form', name: 'Form', component: Form },
  {
    path: '/topics',
    name: 'Topic',
    component: [
      { path: '/topics/subtopic', name: 'Sub Topic', component: SubTopic },
      { path: null, name: 'Topic', component: Topic },
    ],
  },

  { path: '/actionloader', name: 'Loaders', component: LoaderSample },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    authenticated: true,
  },
];

export default indexRoutes;
