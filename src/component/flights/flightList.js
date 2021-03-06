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
import FilterFlight from './filterFlight'
const flexStyle = {
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between"
}
const FlightList = ({flights , addFlight , filterFlight}) => {
  let flightList;
  let counter = 0;
  if(!flights || !flights.length){
    flightList = <TableRow> <TableRowColumn> No flights to show </TableRowColumn></TableRow>
  }
  else{
    flightList = flights.map((flight , index) => (<TableRow key={index}>
      <TableRowColumn>{flight.from}</TableRowColumn>
      <TableRowColumn>{flight.to}</TableRowColumn>
      <TableRowColumn>{flight.depature}</TableRowColumn>
      <TableRowColumn>{flight.landing}</TableRowColumn>
      <TableRowColumn>{flight.price}</TableRowColumn>
  </TableRow> ));
  }
  return (
    <div>
      <div style={flexStyle}>
        <AddFlight onClick={addFlight}></AddFlight>
        <FilterFlight onClick={filterFlight}> </FilterFlight>
      </div>
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