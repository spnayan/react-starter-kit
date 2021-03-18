import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addTopic: ['payload'],
  selectTopic: ['payload'],
});

export default Creators;
