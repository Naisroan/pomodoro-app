// lo basico para redux, (applyMiddleware) para implementar las Sagas
import { createStore, applyMiddleware } from 'redux';

// para poder usar los tools del nav 
import { composeWithDevTools } from 'redux-devtools-extension';

// lo necesario para implementar los reducers
import rootReducer, { GlobalState } from './reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// importamos todas las sagas (middlware)
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

// router
import { browserHistory } from './reducer';
import { routerMiddleware } from 'connected-react-router';

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
    applyMiddleware(
      routerMiddleware(browserHistory),
      sagaMiddleware
    )
  )
);

sagaMiddleware.run(rootSaga);

export default store;