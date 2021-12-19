import { combineReducers } from 'redux';

// reducers
import users from './users/reducer';

const rootReducer = combineReducers({
  users
});

export type GlobalState = ReturnType<typeof rootReducer>;
export default rootReducer;