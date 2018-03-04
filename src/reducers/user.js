import UserService from '../services/userService.js'
const userReducer = (state = {
    loggedIn: false,
    loginErr: ""
} , action) => {
    switch(action.type){
        case 'USER_LOGIN':
            if(UserService.verifyLogin(action.userName, action.password)){
                return Object.assign({} , state, {loggedIn:true , loginErr:""});
            }
            else{
                return Object.assign({} , state, {loggedIn:false , loginErr:"User name or password incorrect"}); 
            }
        default:
            return state;
    }
}
export default userReducer;