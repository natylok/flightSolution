import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddFlight from './addFlight';
const FlightList = ({flights , addFlight}) => {
  let flightList;
  if(!flights || !flights.length){
    flightList = <TableRow> <TableRowColumn> No flights to show </TableRowColumn></TableRow>
  }
  else{
    flightList = flights.map(flight => (<TableRow key={flight.departure}>
      <TableRowColumn>{flight.from}</TableRowColumn>
      <TableRowColumn>{flight.to}</TableRowColumn>
      <TableRowColumn>{flight.departure}</TableRowColumn>
      <TableRowColumn>{flight.landing}</TableRowColumn>
      <TableRowColumn>{flight.price}</TableRowColumn>
  </TableRow> ));
  }
  return (
    <div>
      <AddFlight onClick={addFlight}></AddFlight>
      <MuiThemeProvider>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>From</TableHeaderColumn>
              <TableHeaderColumn>To</TableHeaderColumn>
              <TableHeaderColumn>Departure Time</TableHeaderColumn>
              <TableHeaderColumn>Landing Time</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flightList}
          </TableBody>
      </Table>
    </MuiThemeProvider>
  </div>

  );
}


export default FlightList;