import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

console.log('hit store.js');
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))