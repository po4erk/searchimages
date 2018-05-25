import {itemsNumber , GET_IMAGES} from '../constants';

const getImages = list => dispatch => {
  fetch(`https://randomuser.me/api/?results=${itemsNumber}`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: GET_IMAGES,
        payload: list ? [...list, ...response.results] : response.results,
      });
    })
    .catch(error => console.error(error));
};

export default getImages;