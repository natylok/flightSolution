import { connect } from 'react-redux'
import FlightList from './flightList';
import {addFlight , filterFlights}  from '../../actions/index.js';
import FlightService from '../../services/flightService.js'
import _ from 'lodash';
const filterFlight = (flights,filter) => {
    return _.filter(flights, (flight) => { return !filter || !flight.to ||  flight.to.indexOf(filter) > -1})
}
const mapStateToProps = (state) => {
    return {
      flights: filterFlight(state.flightsReducer , state.filterFlights.filter)
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        addFlight: (flight) => {
            dispatch(addFlight(flight));
        },
        filterFlight:(filter) =>{
            dispatch(filterFlights(filter)); 
        }
    }
}

const FlightListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FlightList)
   
  export default FlightListContainer