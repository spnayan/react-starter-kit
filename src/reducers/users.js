import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/users';

const initialState = [];

const requestUserData = (state) => state;

const receiveUserData = (state, data) => {
  return [...state, data];
};

const getUserFailure = (state) => ({
  ...state,
  loading: false,
});

const userReducer = createReducer(initialState, {
  [Types.REQUEST_USER_DATA]: requestUserData,
  [Types.RECEIVE_USER_DATA]: receiveUserData,
  [Types.GET_USER_FAILURE]: getUserFailure,
});

export default userReducer;
