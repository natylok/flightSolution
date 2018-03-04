import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
    float: "right",
  };
class FilterFlight extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter:""
        };
    }
    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        hintText="Filter Destination" onChange={(event) => {this.state.filter = event.currentTarget.value}} /><br />

                    <RaisedButton label="Filter Flights" onClick={() => {this.props.onClick(this.state.filter)}} primary={true} style={style} />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default FilterFlight;