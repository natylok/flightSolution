const loginUser = (userName, password) => {
    return {
        type :"USER_LOGIN",
        userName,
        password
    }
};



export const filterFlight = (filter) =>{
    return {
        type: "FILTER_FLIGHT",
        filter
    };
}
export default loginUser;