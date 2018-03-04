import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
const resetFlightObj= (flightObj) => {
  debugger;
  flightObj ={
      name: "",
      from: "",
      to:"",
      departure:"",
      price:""
  };
}
const FlightList = ({flights , addFlight}) => {
  let flightList , flightObj = {};

  resetFlightObj(flightObj);
  if(!flights || !flights.length){
    flightList = <tr><td>No flights to show</td></tr>
  }
  else{
    flightList = flights.map(flight => (<tr key={flight.departure}>
      <td>{flight.from}</td>
      <td>{flight.to}</td>
      <td>{flight.departure}</td>
      <td>{flight.landing}</td>
      <td>{flight.price}</td>
  </tr> ));
  }
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input onChange={(event) => {flightObj.name = event.currentTarget.value;}} />
        <label htmlFor="from">From</label>
        <input onChange={(event) => {flightObj.from = event.currentTarget.value;}} />
        <label htmlFor="to">To </label>
        <input onChange={(event) => {flightObj.to = event.currentTarget.value;}} />
        <label htmlFor="destination">Destination</label>
        <input onChange={(event) => {flightObj.destination = event.currentTarget.value;}} />
        <label htmlFor="price">Price</label>
        <input onChange={(event) => {flightObj.price = event.currentTarget.value;}} />
        <button onClick={() => {resetFlightObj(flightObj); addFlight(flightObj)} }>Add Flight</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Departure Time</th>
            <th>Landing Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flightList}
        </tbody>
      </table>
    </div>
  );
}


export default FlightList;