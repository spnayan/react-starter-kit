import { all } from 'redux-saga/effects';
import loginWatcher from './login';
import registerWatcher from './register';
import topicWatcher from './topic';
import loadesampleWatcher from './loadersample';
import userWatcher from './users';
import projectWatcher from './projects';

function* rootSaga() {
  yield all([loginWatcher(), registerWatcher(), topicWatcher(), loadesampleWatcher(), userWatcher(), projectWatcher()]);
}

export default rootSaga;
