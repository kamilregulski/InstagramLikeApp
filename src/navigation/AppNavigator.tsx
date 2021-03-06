import 'react-native-gesture-handler';
import React, {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/screens/Home/Home';
import PhotoDetails from 'src/screens/PhotoDetails/PhotoDetails';

const Stack = createStackNavigator();

const AppNavigator: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            title: 'Instagram Like App',
          }}
        />
        <Stack.Screen
          component={PhotoDetails}
          name="PhotoDetails"
          options={{
            title: 'Photo Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
