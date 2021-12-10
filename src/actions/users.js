// export const receiveUserData = (data) => ({ type: RECEIVE_USER_DATA, data });

import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  requestUserData: ['payload'],
  receiveUserData: ['payload'],
  getUserFailure: ['payload'],
});

export default Creators;
