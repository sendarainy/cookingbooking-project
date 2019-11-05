import { GET_VENUES, FILTER_VENUES, ADD_VENUE, DELETE_VENUE, VENUES_LOADING } from '../actions/types'

const initialState = {
  venues: [],
  filtered: null,
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FILTER_VENUES:
      return {
        ...state,
        filtered: state.venues.filter(venue => venue.price <= parseInt(action.payload))
      }
    case VENUES_LOADING:
      return {
        ...state,
        loading: true
      }
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