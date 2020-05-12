import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import {AsyncStorage} from '@react-native-community/async-storage';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .use(reactotronRedux())
  .connect()
  .use(sagaPlugin());

export default reactotron;
