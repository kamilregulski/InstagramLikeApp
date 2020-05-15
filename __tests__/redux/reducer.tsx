import {Types} from 'src/redux/actions';
import reducer from 'src/redux/reducer';

describe('photos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      items: [],
    });
  });

  it('should handle GET_PHOTOS_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: Types.GET_PHOTOS_REQUEST,
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
          type: Types.GET_PHOTOS_SUCCESS,
          payload: {
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

    expect(
      reducer(undefined, {
        type: Types.GET_PHOTOS_FAILURE,
        isFetching: false,
      }),
    ).toEqual({
      isFetching: false,
      items: [],
    });
  });
});
