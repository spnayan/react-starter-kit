import { createReducer } from 'reduxsauce';
import persist from '../utils/persist';
import { Types } from '../actions/login';

const initialState = {
  loading: false,
  user: {},
};

const loginRequest = (state) => ({ ...state, loading: true });

const loginSuccess = (state, action) => {
  return { ...state, loading: false, user: action.payload.data };
};

const loginFailure = (state) => ({
  ...state,
  loading: false,
});

const loginReducer = createReducer(initialState, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
});

export default persist('user', ['user'], loginReducer);
