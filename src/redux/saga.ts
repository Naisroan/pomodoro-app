import { all } from 'redux-saga/effects';
import usersSaga from './users/saga';
import timerSaga from './timer/saga';

export default function* rootSaga() {
  yield all(
    [
      usersSaga(),
      timerSaga()
    ]
  );
}