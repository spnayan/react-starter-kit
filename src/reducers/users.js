import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/users';

const initialState = {
  users: [],
  loading: false,
};

const requestUserData = (state) => ({ ...state, loading: true });

const receiveUserData = (state, action) => {
  return { ...state, loading: false, users: action.payload };
};

const getUserFailure = (state) => ({
  ...state,
});

const userReducer = createReducer(initialState, {
  [Types.REQUEST_USER_DATA]: requestUserData,
  [Types.RECEIVE_USER_DATA]: receiveUserData,
  [Types.GET_USER_FAILURE]: getUserFailure,
});

export default userReducer;
