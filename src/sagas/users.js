import { call, put, takeLatest } from 'redux-saga/effects';
import usersActions, { Types } from '../actions/users';

import fetchData from '../services/users';

export function* getUserData() {
  try {
    const data = yield call(fetchData);

    yield put(usersActions.receiveUserData(data));
  } catch (error) {
    yield put(usersActions.getUserFailure());
  }
}

export default function* userWatcher() {
  yield takeLatest(Types.REQUEST_USER_DATA, getUserData);
}
