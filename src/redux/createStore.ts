import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import Reactotron from '../../ReactotronConfig';
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
  network,
  photos,
};

export type AppState = GetReducerState<typeof reducers>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['photos'],
  blacklist: ['network'],
};

const sagaMonitor = Reactotron.createSagaMonitor();

const networkMiddleware = createNetworkMiddleware();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const loggerMiddleware = createLogger();
const rootReducer = combineReducers(reducers);
const middlewares = [networkMiddleware];
middlewares.push(sagaMiddleware);
middlewares.push(loggerMiddleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares), Reactotron.createEnhancer()),
);
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);

export {store, persistor};
