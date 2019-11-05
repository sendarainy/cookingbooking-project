import {
  GET_VENUES,
  ADD_VENUE,
  DELETE_VENUE,
  VENUES_LOADING,
  GET_VENUES_SUCCESS
} from '../actions/types';

const initialState = {
  loading: false,
  error: false,
  // name: '',
  // address: '',
  // geo: '',
  // phone: '',
  // email: ''
  venues: []
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_VENUE:
      return {
        ...state
        // isLoading: true
      };
    case GET_VENUES:
      return {
        ...state,
        venues: action.venues,
        loading: true,
        error: false
      };
    case GET_VENUES_SUCCESS:
      return {
        ...state,
        venues: action.venues
      };
    default:
      return state;
  }
}
