import {GET_IMAGES} from '../constants';
const initialState = {
  images: [],
};

export function imagesReducers(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return { ...state, images: [...action.payload] };
    default:
      return state;
  }
}