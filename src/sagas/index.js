import { all } from 'redux-saga/effects';
import loginWatcher from './login';

function* rootSaga() {
  yield all([loginWatcher()]);
}

export default rootSaga;
