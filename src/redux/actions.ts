export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
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
