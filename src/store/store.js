import {  legacy_createStore as createStore, applyMiddleware, compose  } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers'
import rootSaga from './sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  // Add a saga middleware watcher to look for sagas that are listening to actions
  // Add logger middleware for debugging
  const middlewareEnhancer = applyMiddleware(sagaMiddleware,logger)
  const composedEnhancers = compose(
    middlewareEnhancer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  const store = createStore(rootReducer,undefined,composedEnhancers);
  sagaMiddleware.run(rootSaga)
  
  return store;
};
export default configureStore;