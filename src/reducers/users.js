import { RECEIVE_USER_DATA } from '@Actions/users';

export default (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_USER_DATA:
      return data;
    default:
      return state;
  }
};
