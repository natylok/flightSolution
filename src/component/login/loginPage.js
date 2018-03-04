import React from 'react'
import { withRouter } from 'react-router-dom'
const LoginPage = ({isLoggedIn , onSubmit}) => {
    let userName = "" , password = "";
    if(isLoggedIn){
    }
    return (
        <div className="login-wrapper">
            <input id="user-name" onChange={(event) => {userName = event.currentTarget.value}} /> 
            <input id="password" onChange={(event) => {password = event.currentTarget.value}} /> 
            <button onClick={() => {onSubmit(userName, password)} }>Login</button>
        </div>
    );
}
export default LoginPage