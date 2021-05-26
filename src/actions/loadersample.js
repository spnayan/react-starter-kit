import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getDashboardRequest: null,
  getDashboardSuccess: ['payload'],

  getMoreContentRequest: ['payload'],
  getMoreContentSuccess: ['payload'],
});

export default Creators;
