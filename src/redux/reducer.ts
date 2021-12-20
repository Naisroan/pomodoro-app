import { combineReducers } from 'redux';

// router https://github.com/supasate/connected-react-router
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// reducers
import users from './users/reducer';

export const browserHistory = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(browserHistory),
  users
});

export type GlobalState = ReturnType<typeof rootReducer>;
export default rootReducer;