// export const receiveUserData = (data) => ({ type: RECEIVE_USER_DATA, data });

import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getUserData: ['payload'],
  getUserSuccess: ['payload'],
  getUserFailure: ['payload'],
});

export default Creators;
