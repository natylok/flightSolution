import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
    margin: 12,
  };
class AddFlight extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flightObj: {
                from:"",
                to:"",
                depature:"",
                landing:"",
                price:""
            }
        };
    }
    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        hintText="From" onChange={(event) => {this.state.flightObj.from = event.currentTarget.value}} /><br />
                    <TextField
                    onChange={(event) => {this.state.flightObj.to = event.currentTarget.value}}  hintText="To"/><br />
                    <TextField
                    onChange={(event) => {this.state.flightObj.depature = event.currentTarget.value}}   hintText="Departure"/><br />
                    <TextField
                    onChange={(event) => {this.state.flightObj.landing = event.currentTarget.value}}   hintText="Landing"/><br />
                    <TextField
                    onChange={(event) => {this.state.flightObj.price = event.currentTarget.value}}   hintText="Price"/><br />
                    <RaisedButton label="Add Flight" onClick={() => {this.props.onClick(this.state.flightObj); }} primary={true} style={style} />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default AddFlight;