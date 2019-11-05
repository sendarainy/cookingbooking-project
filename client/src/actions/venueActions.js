import {
  GET_VENUES,
  ADD_VENUE,
  DELETE_VENUE,
  VENUES_LOADING,
  GET_VENUES_SUCCESS
} from '../actions/types';

// export const getVenuesAC = () => ({ type: GET_VENUES });

export const getVenuesSuccessAC = venues => ({
  type: GET_VENUES_SUCCESS,
  venues
});

export const getVenuesAC = () => async dispatch => {
  console.log(8);
  try {
    console.log(8);
    const resp = await fetch('/api/venues');
    const venues = await resp.json();
    dispatch(getVenuesSuccessAC(venues));
  } catch (err) {
    dispatch(null);
    // dispatch(requestCatErrorAC());
  }
};
