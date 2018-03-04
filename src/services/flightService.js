class FlightService{
    static verifyFlightDetails(flight){
        if(!flight.from || !flight.to || flight.price || flight.dep || flight.landing){
            return {
                status:false,
                error:"Please fill all details"
            };
        }
        if(typeof flight.price !== "number"){
            return {
                status:false,
                error:"Price need to be a number"
            };
        }
        return {
            status : true
        };
    }
}
export default FlightService;