import {all, delay, fork, put, retry} from 'redux-saga/effects';
import * as actions from './actions';
import {client} from '../../App';
import {GET_PHOTOS} from '../graphql/queries';
import {networkSaga} from 'react-native-offline';

export async function fetchPhotosAsync() {
  const {data} = await client.query({
    query: GET_PHOTOS,
  });
  return data;
}

export function* fetchPhotos() {
  try {
    const SECOND = 1000;
    yield put(actions.requestPhotos());
    yield delay(1000);
    const data = yield retry(10, 10 * SECOND, fetchPhotosAsync);
    yield put(actions.receivePhotos(data.photos));
  } catch {
    yield put(actions.failurePhotos());
  }
}

export default function* rootSaga() {
  yield all([fork(fetchPhotos), fork(networkSaga)]);
}
