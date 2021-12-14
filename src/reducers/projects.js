import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/projects';

const initialState = {
  project: [],
  loading: false,
};

const getProjectsRequest = (state) => ({ ...state, loading: true });

const getProjectsSuccess = (state, action) => {
  return { ...state, loading: false, project: action.payload };
};

const getProjectsFailure = (state) => ({
  ...state,
});

const projectsReducer = createReducer(initialState, {
  [Types.GET_PROJECTS_REQUEST]: getProjectsRequest,
  [Types.GET_PROJECTS_SUCCESS]: getProjectsSuccess,
  [Types.GET_PROJECTS_FAILURE]: getProjectsFailure,
});

export default projectsReducer;
