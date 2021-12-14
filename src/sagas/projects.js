import { call, put, takeLatest } from 'redux-saga/effects';
import loaderActions from '@Actions/loader.actions';
import toastActions from '@Actions/toast';
import projectsActions, { Types } from '../actions/projects';

import fetchProjects from '../services/projects';

export function* getProjectsData(action) {
  const { type } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
        },
      }),
    );
    const data = yield call(fetchProjects);
    yield put(projectsActions.getProjectsSuccess(data));
    yield put(toastActions.success({ message: 'Projects Successfully fetched' }));
  } catch (error) {
    yield put(projectsActions.getProjectsFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

export default function* projectWatcher() {
  yield takeLatest(Types.GET_PROJECTS_REQUEST, getProjectsData);
}
