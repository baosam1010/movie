

import { combineReducers } from 'redux';
import PostReducer from './../reducers/Post';
import Search from './../reducers/Search';

const rootReducer = combineReducers({
  PostReducer,
  Search
});
export default rootReducer;