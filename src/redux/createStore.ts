import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['photos'],
  blacklist: [],
};

export type AppState = GetReducerState<typeof reducers>;

const networkMiddleware = createNetworkMiddleware({
  regexActionType: /^OTHER/,
  actionTypes: ['GET_PHOTOS'],
});
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const rootReducer = combineReducers(reducers);
const middlewares = [networkMiddleware];
middlewares.push(sagaMiddleware);
middlewares.push(loggerMiddleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);

export {store, persistor};
