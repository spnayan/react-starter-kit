import { call, put, takeLatest } from 'redux-saga/effects';
import loaderActions from '@Actions/loader.actions';
import toastActions from '@Actions/toast';
import usersActions, { Types } from '../actions/users';

import fetchData from '../services/users';

export function* getUserData(action) {
  const { type } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
        },
      }),
    );
    const data = yield call(fetchData);
    yield put(usersActions.receiveUserData(data));
    yield put(toastActions.success({ message: 'Users Successfully fetched' }));
  } catch (error) {
    yield put(usersActions.getUserFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

export default function* userWatcher() {
  yield takeLatest(Types.REQUEST_USER_DATA, getUserData);
}
