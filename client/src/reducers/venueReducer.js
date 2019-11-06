import { 
  GET_VENUES, 
  FILTER_PRICE,
  FILTER_DATE, 
  ADD_VENUE, 
  DELETE_VENUE, 
  VENUES_LOADING, 
  GET_VENUES_SUCCESS ,
  CANCEL_FILTER
} from '../actions/types'
import { getResults } from '../helpers'

const initialState = {
  venues: [],
  filtered: null,
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FILTER_PRICE:
      // const prevResults = getResults(state)
      return {
        ...state,
        filtered: state.venues.filter(venue => venue.price <= action.payload.price)
      }
    case FILTER_DATE:
      return {
        ...state,
        filtered: state.venues.filter(venue => venue.id === action.payload.id)
      }
    case VENUES_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_VENUES_SUCCESS:
    return {
      ...state,
      venues: action.venues
    };
    case GET_VENUES:
      return {
        ...state,
        venues: action.payload,
        filtered: null,
        loading: false
      }
    default:
      return state
  }
}

