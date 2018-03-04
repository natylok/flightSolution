import _ from 'lodash';
const flightsReducer = (state = [] , action) => {
    debugger;
    switch(action.type){
        case 'ADD_FLIGHT':
            return [ ...state , action.flight];
        case 'SET_FLIGHTS_FILTER':
            return _.filter(state, (flight) => {
                return flight.to === action.filter;
            });
        default:
            return state;
    }
}
export default flightsReducer;