
const filterFlights = (state = {filter:""} , action) => {
    switch(action.type){
        case 'FILTER_FLIGHTS':
            return Object.assign({} , state , {filter:action.filter}); 
        default:
            return state;
    }
}
export default filterFlights;