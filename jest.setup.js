import {NativeModules} from 'react-native';

/* eslint-env jest */
NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};
