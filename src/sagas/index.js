import { all } from 'redux-saga/effects';
import loginWatcher from './login';
import registerWatcher from './register';
import topicWatcher from './topic';

function* rootSaga() {
  yield all([loginWatcher(), registerWatcher(), topicWatcher()]);
}

export default rootSaga;
