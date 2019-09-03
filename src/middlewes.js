export const isAuthenticated = (request) => {
    if(!request.user){
        throw Error("need to log-in to the this acrion")
    }
    return;
}