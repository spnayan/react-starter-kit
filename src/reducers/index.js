import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
import login from './login';

export default combineReducers({
  router: connectRouter(history),
  login,
});
