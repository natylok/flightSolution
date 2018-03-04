import { combineReducers } from 'redux'
import userReducer from './user'
import flightsReducer from './flights'
const flightApp = combineReducers({
    userReducer,
    flightsReducer
});

export default flightApp;