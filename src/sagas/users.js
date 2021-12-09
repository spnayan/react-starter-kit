import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_USER_DATA, receiveUserData } from '../actions/users';
import fetchData from '../services/users';

export function* getUserData() {
  try {
    const data = yield call(fetchData);

    yield put(receiveUserData(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* userWatcher() {
  yield takeLatest(REQUEST_USER_DATA, getUserData);
}
