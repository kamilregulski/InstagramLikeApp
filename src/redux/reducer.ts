import {REQUEST_PHOTOS, RECEIVE_PHOTOS, FAILURE_PHOTOS} from './actions';
import {PhotosType} from '../types';

const initialState: PhotosType = {
  isFetching: false,
  items: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return {...state, isFetching: true};

    case RECEIVE_PHOTOS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };

    case FAILURE_PHOTOS:
      return {...state, isFetching: false};

    default:
      return state;
  }
};

export default reducer;
