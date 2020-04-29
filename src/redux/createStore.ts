import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  reducer as network,
  createNetworkMiddleware,
} from 'react-native-offline';
import photos from './reducer';
import rootSaga from './sagas';

type GetReducerState<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => infer Q ? Q : never;
};

export const reducers = {
  photos,
  network,
};

export type AppState = GetReducerState<typeof reducers>;

export default function createReduxStore() {
  const networkMiddleware = createNetworkMiddleware({
    regexActionType: /^OTHER/,
    actionTypes: ['GET_PHOTOS'],
  });
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers(reducers);
  const middlewares = [networkMiddleware];
  middlewares.push(sagaMiddleware);
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
}
