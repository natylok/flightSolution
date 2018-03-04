import { combineReducers } from 'redux'
import userReducer from './user'
import flightsReducer from './flights'
import filterFlights from './filterFlights'
const flightApp = combineReducers({
    userReducer,
    flightsReducer,
    filterFlights
});

export default flightApp;