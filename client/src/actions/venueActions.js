import {
  GET_VENUES,
  FILTER_VENUES,
  ADD_VENUE,
  DELETE_VENUE,
  VENUES_LOADING,
  GET_VENUES_SUCCESS
} from './types';
import axios from 'axios';

// list venues
export const getVenues = () => async dispatch => {
  const resp = await axios.get('api/venues');
  dispatch({
    type: GET_VENUES,
    payload: resp.data
  });
};

// filter venues
export const filterVenues = obj => dispatch => {
  dispatch({
    type: FILTER_VENUES,
    payload: obj
  });
};

// add Venue success
export const getVenuesSuccessAC = venues => ({
  type: GET_VENUES_SUCCESS,
  venues
});

// add Venue
export const addVenueAC = data => async dispatch => {
  const resp = await fetch('/api/venues/new', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const venues = await resp.json();
  console.log(venues);
  dispatch(getVenuesSuccessAC(venues));
};

// export const getVenuesAC = () => ({ type: GET_VENUES });

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
