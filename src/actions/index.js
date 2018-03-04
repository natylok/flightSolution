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
export const filterFlights = (filter) =>{
    return {
        type: "FILTER_FLIGHTS",
        filter
    };
}

