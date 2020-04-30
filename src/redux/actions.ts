export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const FAILURE_PHOTOS = 'FAILURE_PHOTOS';

import {PhotoType} from '../types';

export const requestPhotos = () => ({
  type: REQUEST_PHOTOS,
});
export type RequestPhotosType = typeof requestPhotos;

export function receivePhotos(items: PhotoType[]) {
  return {
    type: RECEIVE_PHOTOS,
    items,
  };
}
export type ReceivePhotosType = typeof receivePhotos;

export const failurePhotos = () => ({
  type: FAILURE_PHOTOS,
});
export type FailurePhotosType = typeof failurePhotos;
