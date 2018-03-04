import React from 'react'
import { withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
const LoginPage = ({isLoggedIn , onSubmit , currentTextMessage}) => {
    let userName = "" , password = "" , style={marginLeft:"2rem"}; 
    return (
        <MuiThemeProvider>
            <div className="login-wrapper">
                <TextField errorText={currentTextMessage} id="user-name" hintText="User Name" onChange={(event) => {userName = event.currentTarget.value}} /> 
                <TextField errorText={currentTextMessage}  id="password" hintText="Password" onChange={(event) => {password = event.currentTarget.value}}  style={style}/> 
                <RaisedButton primary={true} label="Login" onClick={() => {onSubmit(userName, password)} }></RaisedButton>
            </div>
        </MuiThemeProvider>
    );
}
export default LoginPage