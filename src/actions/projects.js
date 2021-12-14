import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getProjectsRequest: ['payload'],
  getProjectsSuccess: ['payload'],
  getProjectsFailure: ['payload'],
});

export default Creators;
