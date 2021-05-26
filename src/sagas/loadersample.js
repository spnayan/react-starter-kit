import { put, takeLatest, delay, takeEvery } from 'redux-saga/effects';
import loadersampleActions, { Types } from '@Actions/loadersample';
import toastActions from '@Actions/toast';
import loaderActions from '@Actions/loader.actions';

function getMoreContent(payload) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  let toReturn;
  if (payload === 'randomCharacter') {
    toReturn = characters.charAt(Math.floor(Math.random() * charactersLength));
  } else {
    toReturn = Math.random();
  }
  return toReturn;
}

export function* getDashboardRequest(action) {
  const { type } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          actionName: type,
        },
      }),
    );
    yield delay(2000);
    yield put(loadersampleActions.getDashboardSuccess('This is Dashboard Data '));
    yield put(toastActions.success({ message: `Succeefully fetched Dashboard Data` }));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  } finally {
    yield put(
      loaderActions.stopAction({
        actionName: type,
      }),
    );
  }
}
export function* getMoreContentRequest(action) {
  const { type, payload } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          actionName: type,
          key: payload,
        },
      }),
    );
    yield delay(2000);
    yield put(loadersampleActions.getMoreContentSuccess({ [payload]: getMoreContent(payload) }));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  } finally {
    yield put(
      loaderActions.stopAction({
        actionName: type,
        key: payload,
      }),
    );
  }
}
function* registerWatcher() {
  yield takeLatest(Types.GET_DASHBOARD_REQUEST, getDashboardRequest);
  yield takeEvery(Types.GET_MORE_CONTENT_REQUEST, getMoreContentRequest);
}

export default registerWatcher;
