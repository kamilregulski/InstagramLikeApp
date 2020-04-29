import {delay, fork, call, put} from 'redux-saga/effects';
import * as actions from './actions';
import {client} from '../../App';
import {GET_PHOTOS} from '../graphql/queries';

export async function fetchPhotosAsync() {
  const {data} = await client.query({
    query: GET_PHOTOS,
  });
  return data;
}

export function* fetchPhotos() {
  yield put(actions.requestPhotos());
  yield delay(2000);
  const data = yield call(fetchPhotosAsync);
  yield put(actions.receivePhotos(data.photos));
}

export default function* rootSaga() {
  yield fork(fetchPhotos);
}
