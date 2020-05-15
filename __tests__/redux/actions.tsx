import * as actions from 'src/redux/actions';
import {PhotoType} from 'src/types';

describe('actions', () => {
  it('should create an action to get photos request', () => {
    const expectedAction = {
      type: actions.Types.GET_PHOTOS_REQUEST,
    };
    expect(actions.getPhotosRequest()).toEqual(expectedAction);
  });

  it('should create an action to get photos success', () => {
    const item: PhotoType = {
      id: 1,
      url: 'https://...',
      description: 'Description',
    };
    const items: PhotoType[] = [item];
    const expectedAction = {
      type: actions.Types.GET_PHOTOS_SUCCESS,
      payload: {
        items,
      },
    };
    expect(actions.getPhotosSuccess({items})).toEqual(expectedAction);
  });

  it('should create an action to get photos failure', () => {
    const expectedAction = {
      type: actions.Types.GET_PHOTOS_FAILURE,
    };
    expect(actions.getPhotosFailure()).toEqual(expectedAction);
  });
});
