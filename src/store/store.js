import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/auth.reducer';
import homeReducer from './reducers/home.reducer';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger({
      collapsed: true,
    }),
  ),
);

sagaMiddleware.run(rootSaga);
