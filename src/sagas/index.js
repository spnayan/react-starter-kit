import { all } from 'redux-saga/effects';
import loginWatcher from './login';
import registerWatcher from './register';
import topicWatcher from './topic';
import loadesampleWatcher from './loadersample';
import userWatcher from './users';

function* rootSaga() {
  yield all([loginWatcher(), registerWatcher(), topicWatcher(), loadesampleWatcher(), userWatcher()]);
}

export default rootSaga;
