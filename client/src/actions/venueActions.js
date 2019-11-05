import { GET_VENUES, FILTER_VENUES, ADD_VENUE, DELETE_VENUE, VENUES_LOADING } from './types'
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
export const filterVenues = (param) => dispatch => {
  dispatch({
    type: FILTER_VENUES,
    payload: param
  })
}