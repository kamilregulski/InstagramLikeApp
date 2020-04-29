import {
  REQUEST_PHOTOS,
  RECEIVE_PHOTOS,
  requestPhotos,
  receivePhotos,
} from '../../src/redux/actions';
import {PhotoType} from '../../src/types';

describe('actions', () => {
  it('should create an action to request photos', () => {
    const expectedAction = {
      type: REQUEST_PHOTOS,
    };
    expect(requestPhotos()).toEqual(expectedAction);
  });

  it('should create an action to receive photos', () => {
    const item: PhotoType = {
      id: 1,
      url: 'https://...',
      description: 'Description',
    };
    const items: PhotoType[] = [item];
    const expectedAction = {
      type: RECEIVE_PHOTOS,
      items,
    };
    expect(receivePhotos(items)).toEqual(expectedAction);
  });
});
