import { routerReducer } from 'react-router-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';

// Reducers
import settingsReducer from '../reducers/SettingsReducer';

export function configStore(initialState) {
  const reducer = combineReducers({
    routing: routerReducer,
    settings: settingsReducer
  });

  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();

    middlewares.push(logger);
  }

  const store = createStore(reducer, undefined, compose(
  		//autoRehydrate(),
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

  // persistStore(store, {
  //   keyPrefix:''
  // });

  return store;
}
