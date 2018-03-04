import { connect } from 'react-redux'
import FlightList from './flightList'
import {addFlight} from '../../actions/index.js'
const mapStateToProps = (state) => {
    return {
      flights: state.flightsReducer
    }
  }
const mapDispatchToProps = dispatch => {
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