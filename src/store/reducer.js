import { combineReducers } from 'redux';
import user from '@/reducers/user';
import articles from '@/reducers/articles';
import app from '@/reducers/app';

export default combineReducers({
  user,
  articles,
  app,
});
