import { connect } from 'react-redux'
import FlightList from './flightList'

const addFlight = (flight) => {
    return {
        type: "ADD_FLIGHT",
        flight
    };
}
const mapStateToProps = (state) => {
    return {
      flights: state.flightsReducer
    }
  }
const mapDispatchToProps = dispatch => {
    debugger;
    return {
        addFlight: (flight) => {
            dispatch(addFlight(flight));
        }
    }
}

const FlightListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FlightList)
   
  export default FlightListContainer