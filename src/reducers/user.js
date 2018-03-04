import UserService from '../services/userService.js'
const userReducer = (state = {
    loggedIn: false
} , action) => {
    switch(action.type){
        case 'USER_LOGIN':
            if(UserService.verifyLogin(action.userName, action.password)){
                return Object.assign({} , state, {loggedIn:true});
            }
        default:
            return state;
    }
}
export default userReducer;