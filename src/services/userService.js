const USER_DETAILS_CONSTANTS = {
    correctUserName : "user",
    correctPassword : "password"
};
class UserService{
    static verifyLogin(userName , password){
        return userName === USER_DETAILS_CONSTANTS.correctUserName && password === USER_DETAILS_CONSTANTS.correctPassword;
    }
}
export default UserService;