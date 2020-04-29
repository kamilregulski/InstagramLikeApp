import {REQUEST_PHOTOS, RECEIVE_PHOTOS} from '../../src/redux/actions';
import reducer from '../../src/redux/reducer';

describe('photos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      items: [],
    });
  });

  it('should handle REQUEST_PHOTOS', () => {
    expect(
      reducer(undefined, {
        type: REQUEST_PHOTOS,
        isFetching: true,
      }),
    ).toEqual({
      isFetching: true,
      items: [],
    });

    expect(
      reducer(
        {
          isFetching: false,
          items: [],
        },
        {
          type: RECEIVE_PHOTOS,
          items: [
            {
              id: 1,
              url: 'https://...',
              description: 'Description 1',
            },
            {
              id: 2,
              url: 'https://...',
              description: 'Description 2',
            },
          ],
        },
      ),
    ).toEqual({
      isFetching: false,
      items: [
        {
          id: 1,
          url: 'https://...',
          description: 'Description 1',
        },
        {
          id: 2,
          url: 'https://...',
          description: 'Description 2',
        },
      ],
    });
  });
});
