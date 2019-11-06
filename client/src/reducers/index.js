import { combineReducers } from 'redux'
import venueReducer from './venueReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
// import reducerModule

export default combineReducers({
  // reducer: reducerModule
  venues: venueReducer,
  error: errorReducer,
  auth: authReducer
})