import {REQUEST_PHOTOS, RECEIVE_PHOTOS} from './actions';

const initialState: any = {
  isFetching: false,
  photos: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return {...state, isFetching: true};

    case RECEIVE_PHOTOS:
      return {
        ...state,
        isFetching: false,
        photos: action.photos,
      };

    default:
      return state;
  }
};

export default reducer;
