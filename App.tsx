import React, {FunctionComponent} from 'react';
import {ReduxNetworkProvider} from 'react-native-offline';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/createStore';
import AppNavigator from './src/navigation/AppNavigator';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
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
