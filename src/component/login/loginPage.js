import React from 'react'
import { withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
const LoginPage = ({isLoggedIn , onSubmit}) => {
    let userName = "" , password = "";
    if(isLoggedIn){
    }
    return (
        <MuiThemeProvider>
            <div className="login-wrapper">
                <TextField id="user-name" hintText="User Name" onChange={(event) => {userName = event.currentTarget.value}} /> 
                <TextField id="password" hintText="Password" onChange={(event) => {password = event.currentTarget.value}}  style={{marginLeft:"2rem"}}/> 
                <RaisedButton primary={true} label="Login" onClick={() => {onSubmit(userName, password)} }></RaisedButton>
            </div>
        </MuiThemeProvider>
    );
}
export default LoginPage