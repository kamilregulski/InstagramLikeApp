import React from 'react';
import {ReduxNetworkProvider} from 'react-native-offline';
import {Provider} from 'react-redux';
import createStore from './src/redux/createStore';
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

const store = createStore();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ReduxNetworkProvider>
          <AppNavigator />
        </ReduxNetworkProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
