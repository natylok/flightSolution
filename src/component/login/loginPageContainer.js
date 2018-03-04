import { connect } from 'react-redux'
import LoginPage from './loginPage.js'
import {loginUser} from './../../actions/index.js'
import  {HashRouter}  from 'react-router-dom'
var hasshRouterObj =  new HashRouter();
const mapStateToProps = (state) => {
    if(state.userReducer && state.userReducer.loggedIn){
        hasshRouterObj.history.push("/flights");
    }
    return {
        isLogedin: state.userReducer.loggedIn,
        currentTextMessage:state.userReducer.loginErr
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (userName,password) => {
            dispatch(loginUser(userName,password));
        }
    }
}

const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
   
  export default LoginPageContainer