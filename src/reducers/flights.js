import _ from 'lodash';
const flightsReducer = (state = [] , action) => {
    switch(action.type){
        case 'ADD_FLIGHT':
            return [ ...state , action.flight];
        default:
            return state;
    }
}
export default flightsReducer;