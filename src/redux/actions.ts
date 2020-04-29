export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const getPhotos = () => ({
  type: 'GET_PHOTOS',
  payload: [
    {
      id: Number,
      url: String,
      description: String,
    },
  ],
});
export type GetPhotosType = typeof getPhotos;

export const requestPhotos = () => ({
  type: REQUEST_PHOTOS,
});
export type RequestPhotosType = typeof requestPhotos;

export function receivePhotos(photos: any) {
  return {
    type: RECEIVE_PHOTOS,
    photos,
  };
}
