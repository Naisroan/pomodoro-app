import { select, put, takeEvery } from 'redux-saga/effects';
import Task from '../../models/Task';
import ACTIONS from './actions';

function* validate({ payload } : any) {
  try {

    const timer = yield select(state => state.timer);

    switch (timer.stateType) {
      case 'normal': {
        if (timer.sec <= 0) {
          const idUser = yield select(state => state.users.authUser.id);
          const tasks = yield select(state => state.tasks.tasks.filter((task : Task) => task.idUser! === idUser ));
          if (tasks.length % 4 === 0) {
            yield put(ACTIONS.setStateType('long'));
          } else {
            yield put(ACTIONS.setStateType('short'));
          }
        }
        break;
      }
      case 'short': {
        if (timer.sec <= 0) {
          yield put(ACTIONS.setStateType('normal'));
        }
        break;
      }
      case 'long': {
        if (timer.sec <= 0) {
          yield put(ACTIONS.setStateType('normal'));
        }
        break;
      }
    }

  } catch (error) {

  }
}

function* finishStep({ payload } : any) {
  try {

    const timer = yield select(state => state.timer);

    switch (timer.stateType) {
      case 'normal': {
        const idUser = yield select(state => state.users.authUser.id);
        const tasks = yield select(state => state.tasks.tasks.filter((task : Task) => task.idUser! === idUser ));
        if (tasks.length % 4 === 0) {
          yield put(ACTIONS.setStateType('long'));
        } else {
          yield put(ACTIONS.setStateType('short'));
        }
        break;
      }
      case 'short': {
        yield put(ACTIONS.setStateType('normal'));
        break;
      }
      case 'long': {
        yield put(ACTIONS.setStateType('normal'));
        break;
      }
    }

  } catch (error) {

  }
}

export default function* index() {
  yield takeEvery(ACTIONS.INTERVAL, validate);
  yield takeEvery(ACTIONS.FINISH_STEP, finishStep);
}