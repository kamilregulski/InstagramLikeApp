import {Types} from 'src/redux/actions';
import {PhotosType} from 'src/types';

const initialState: PhotosType = {
  isFetching: false,
  items: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.GET_PHOTOS_REQUEST: {
      return {...state, isFetching: true};
    }
    case Types.GET_PHOTOS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        items: action.payload.items,
      };
    }
    case Types.GET_PHOTOS_FAILURE: {
      return {...state, isFetching: false};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
