import axios from "axios";

const routePrefix = "/api/v1";

export async function RegisterNewUser(form){
    let route = "/register";
    return await axios.post(routePrefix + route, form)
}

export async function loginUser(form){
    let route = "/login";
    return await axios.post(routePrefix + route, form)
}

export async function generateAuthToken(userID){
    let route = `/auth/${userID}/generate-token`;
    return await axios.post(routePrefix + route);
}

export async function getUser(userId){
    let route = `/user/${userId}/profile`;
    return await axios.get(routePrefix + route);
}

export async function myFriends(userId, token = null){
    let route = `/user/${userId}/myfriends`;
    return await axios.get(routePrefix + route);
}

export async function findUserByKeyword(keyword, userId = null){
    let route = `/users/find?keyword=${keyword}&userId=${userId}`;
    return await axios.get(routePrefix + route);
}
