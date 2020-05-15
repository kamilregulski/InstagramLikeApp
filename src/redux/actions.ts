import {PhotoType} from 'src/types';

export const Types = {
  GET_PHOTOS_REQUEST: 'GET_PHOTOS_REQUEST',
  GET_PHOTOS_SUCCESS: 'GET_PHOTOS_SUCCESS',
  GET_PHOTOS_FAILURE: 'GET_PHOTOS_FAILURE',
};

export const getPhotosRequest = () => {
  console.log('actions.getPhotosRequest');
  return {
    type: Types.GET_PHOTOS_REQUEST,
  };
};
export type GetPhotosRequestType = typeof getPhotosRequest;

export function getPhotosSuccess({items}: {items: PhotoType[]}) {
  return {
    type: Types.GET_PHOTOS_SUCCESS,
    payload: {
      items,
    },
  };
}
export type GetPhotosSuccessType = typeof getPhotosSuccess;

export const getPhotosFailure = () => ({
  type: Types.GET_PHOTOS_FAILURE,
});
export type GetPhotosFailureType = typeof getPhotosFailure;
