import { connect } from 'react-redux'
import LoginPage from './loginPage.js'
import loginUser from './../../actions/index.js'
import { HashRouter } from 'react-router-dom'
const mapStateToProps = (state) => {
    debugger;
    if(state.userReducer && state.userReducer.loggedIn){
        window.location.hash = "/flights";
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (userName,password) => {
            console.log(userName,password);
            dispatch(loginUser(userName,password));
        }
    }
}

const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
   
  export default LoginPageContainer