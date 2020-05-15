import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {networkSaga} from 'react-native-offline';
import * as actions from './actions';
import {getPhotosApi} from '../api/photos';

function* getPhotos() {
  console.log('sagas.getPhotos');
  try {
    const result = yield call(getPhotosApi);
    yield put(actions.getPhotosSuccess({items: result.photos}));
  } catch {
    yield put(actions.getPhotosFailure());
  }
}

function* watchGetPhotosRequest() {
  console.log('sagas.watchGetPhotosRequest');
  yield takeEvery(actions.Types.GET_PHOTOS_REQUEST, getPhotos);
}

export default function* rootSaga() {
  yield all([fork(networkSaga), fork(watchGetPhotosRequest)]);
}
