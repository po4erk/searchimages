import { combineReducers } from 'redux';
import { imagesReducers } from './imagesReducer';

export default combineReducers({
  images: imagesReducers,
});
