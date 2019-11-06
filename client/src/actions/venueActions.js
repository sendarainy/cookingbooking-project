import { 
  GET_VENUES,
  FILTER_PRICE, 
  FILTER_DATE, 
  ADD_VENUE, 
  DELETE_VENUE, 
  VENUES_LOADING, 
  GET_VENUES_SUCCESS 
} from './types'
import axios from 'axios'

// list venues
export const getVenues = () => async dispatch => {
  const resp = await axios.get('api/venues')
  dispatch({
    type: GET_VENUES,
    payload: resp.data
  })
} 

// filter venues
export const filterVenues = obj => (dispatch, getState)=> {
  if (obj.price) {
    return dispatch({
      type: FILTER_PRICE,
      payload: obj
    })
  }
  dispatch({
    type: FILTER_DATE,
    payload: obj
  })
} 

// export const getVenuesAC = () => ({ type: GET_VENUES });
// ???
export const getVenuesSuccessAC = venues => ({
  type: GET_VENUES_SUCCESS,
  venues
});
// ????
export const getVenuesAC = () => async dispatch => {
  console.log(8);
  try {
    console.log(8);
    const resp = await fetch('/api/venues');
    const venues = await resp.json();
    dispatch(getVenuesSuccessAC(venues));
  } catch (err) {
    dispatch(null);
  }
};
