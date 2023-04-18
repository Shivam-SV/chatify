import { useReducer } from "react";

const initUser = {token: null};

const userReducer = async (user, action) => {
    switch(action.type){
        case 'setToken':
            return {
                token: action.token
            };
        case 'getToken':
            return user.token;
        case 'getUser':
            return {data} = await getUser(null);
        case 'removeUser':
            return initUser;
        default:
            return user;
    }
}

export const {authUser, UserDispatch} = useReducer(initUser, userReducer);


