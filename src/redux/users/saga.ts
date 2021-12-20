import { select, put, takeEvery, delay } from 'redux-saga/effects';
import User from '../../models/User';
import ACTIONS from './actions';
import { browserHistory } from "../../redux/reducer";

function* signin({ payload } : any) {
  try {

    yield delay(1000);

    const state = yield select(state => state.users);
    let user = state.users.find((nodo: User) => nodo.email === payload.nodo.email);
    
    if (user == null || user.password !== payload.nodo.password) {
      yield put(ACTIONS.setError('the email/password not exists'));
      yield put(ACTIONS.login({
        id: 0,
        email: '',
        password: '',
        userName: ''
      }));
      return;
    }
     
    yield put(ACTIONS.login(user));
    yield browserHistory.push('/home');
    
    // yield put(ACTIONS.setSuccess(`the user ${user.userName} has been authenticated `));

  } catch (error) {
    yield put(ACTIONS.setError(error));
  }
}

function* signup({ payload } : any) {
  try {

    yield delay(1000);

    const state = yield select(state => state.users);
    let user = state.users.find((nodo: User) => nodo.email === payload.nodo.email);
    
    if (user != null) {
      yield put(ACTIONS.setError('the email already exists'));
      return;
    }

    user = state.users.find((nodo: User) => nodo.userName === payload.nodo.userName);

    if (user != null) {
      yield put(ACTIONS.setError('the user already exists'));
      return;
    }

    yield put(ACTIONS.create(payload.nodo));
    yield put(ACTIONS.setSuccess(`the user ${payload.nodo.userName} has been created`));

  } catch (error) {
    yield put(ACTIONS.setError(error));
  }
}

function* logout() {
  try {

    yield browserHistory.push('/login');
  } catch (error) {
    yield put(ACTIONS.setError(error));
  }
}

export default function* index() {
  yield takeEvery(ACTIONS.SIGNUP, signup);
  yield takeEvery(ACTIONS.SIGNIN, signin);
}