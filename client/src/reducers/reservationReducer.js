import { 
  GET_RESERVATIONS,
  FILTER_RESERVATIONS,
  ADD_RESERVATION,
  DELETE_RESERVATION
} from '../actions/types'
import { getResults } from '../helpers'

const initialState = {
  reservations: [],
  filtered: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload
      }
    case FILTER_RESERVATIONS:
      const prevResults = getResults(state)
      const [ key ] = Object.keys(action.payload)
      return {
        ...state,
        filtered: prevResults.filter(venue => venue[key] === action.payload[key])
      }
    case ADD_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload]
      }
    case DELETE_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.filter(reservation => reservation.id !== action.payload.id)
      }
    default:
      return state
  }
}

