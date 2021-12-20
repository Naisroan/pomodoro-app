import { combineReducers } from 'redux';

// router https://github.com/supasate/connected-react-router
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// reducers
import users from './users/reducer';
import tasks from './tasks/reducer';
import timer from './timer/reducer';

export const browserHistory = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(browserHistory),
  users,
  tasks,
  timer
});

export type GlobalState = ReturnType<typeof rootReducer>;
export default rootReducer;