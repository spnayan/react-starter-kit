import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/users';

const initialState = {
  users: [],
  loading: false,
};

const getUserData = (state) => ({ ...state, loading: true });

const getUserSuccess = (state, action) => {
  return { ...state, loading: false, users: action.payload };
};

const getUserFailure = (state) => ({
  ...state,
});

const userReducer = createReducer(initialState, {
  [Types.GET_USER_DATA]: getUserData,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILURE]: getUserFailure,
});

export default userReducer;
