export const loginUser = (userName, password) => {
    return {
        type :"USER_LOGIN",
        userName,
        password
    }
};

export const addFlight = (flight) => {
    return {
        type: "ADD_FLIGHT",
        flight
    };
}
export const filterFlight = (filter) =>{
    return {
        type: "FILTER_FLIGHT",
        filter
    };
}
