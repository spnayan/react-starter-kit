import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import loginUser from '../services/login';
import loginActions, { Types } from '../actions/login';
import toastActions from '../actions/toast';

export function* loginRequest(action) {
  try {
    const { payload } = action;
    const response = yield call(loginUser, payload);
    localStorage.setItem('token', response.data.token);
    yield put(loginActions.loginSuccess({ data: response.data }));
    yield put(push('/'));
  } catch (error) {
    yield put(loginActions.loginFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* logoutRequest() {
  try {
    localStorage.clear();
    yield put(loginActions.logoutSuccess());
    yield put(push('/login'));
    yield put(toastActions.success({ message: 'You logged out successfully.' }));
  } catch (error) {
    yield put(loginActions.logoutFailure());
  }
}

function* loginWatcher() {
  yield takeLatest(Types.LOGIN_REQUEST, loginRequest);
  yield takeLatest(Types.LOGOUT_REQUEST, logoutRequest);
}

export default loginWatcher;
