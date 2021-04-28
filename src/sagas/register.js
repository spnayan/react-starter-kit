import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import registerUser from '@Services/register';
import registerActions, { Types } from '@Actions/register';
import toastActions from '@Actions/toast';

export function* registerUserRequest(action) {
  try {
    const { payload } = action;
    yield call(registerUser, payload);
    yield put(registerActions.registerUserSuccess());
    yield put(push('/login'));
    yield put(toastActions.success({ message: 'You have been registered successfully.' }));
  } catch (error) {
    yield put(registerActions.registerUserFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* registerWatcher() {
  yield takeLatest(Types.REGISTER_USER_REQUEST, registerUserRequest);
}

export default registerWatcher;
