import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { logger, apiFetch } from './middleware';

const initialState = {};

const enhancers = [];
const middleware = [
  thunk, /* , actions as functions */
  apiFetch, /* , ultra fetch */
  logger, /* , ultra console log */
];

const { devToolsExtension } = window;

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);


const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;

