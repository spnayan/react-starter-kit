import { all } from 'redux-saga/effects';
import loginWatcher from './login';
import registerWatcher from './register';

function* rootSaga() {
  yield all([loginWatcher(), registerWatcher()]);
}

export default rootSaga;
