import { 
  GET_RESERVATIONS,
  FILTER_RESERVATIONS,
  ADD_RESERVATION,
  DELETE_RESERVATION
} from '../actions/types'
import { filterVenues } from './venueActions'
import axios from 'axios'

export const getReservations = () => async dispatch => {
  const resp = await axios.get('/api/reservations')
  dispatch({
    type: GET_RESERVATIONS,
    payload: resp.data
  })
}

export const filterReservations = date => dispatch => {
  dispatch({
    type: FILTER_RESERVATIONS,
    payload: date
  })
}