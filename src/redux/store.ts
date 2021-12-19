import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { GlobalState } from './reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootSaga from './saga';

const persistConfig = {
  key: "pomodoro",
  storage,
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer<GlobalState>(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer, 
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;