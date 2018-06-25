import { combineReducers } from 'redux';
import articles from '@/reducers/articles';
import app from '@/reducers/app';

export default combineReducers({
  articles,
  app,
});
