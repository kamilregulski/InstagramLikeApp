if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React, {FunctionComponent} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ReduxNetworkProvider} from 'react-native-offline';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/createStore';
import AppNavigator from './src/navigation/AppNavigator';
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import OfflineLink from 'apollo-link-offline';

const serverLink = new HttpLink({
  uri: 'http://localhost:4000',
});

const offlineLink = new OfflineLink({
  storage: AsyncStorage,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([offlineLink, serverLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReduxNetworkProvider>
            <AppNavigator />
          </ReduxNetworkProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
