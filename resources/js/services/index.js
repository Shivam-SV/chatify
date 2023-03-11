import axios from "axios";

const routePrefix = "/api/v1";

export async function RegisterNewUser(form){
    let route = "/register";
    return await axios.post(routePrefix + route, form)
}

