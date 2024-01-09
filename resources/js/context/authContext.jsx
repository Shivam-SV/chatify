import { createContext, useState } from "react";
const AuthContext = createContext();

function Auth ({children}){
    const authStorageKey = '__auth';
    const defaultState = {
        authToken: undefined,
        name: undefined,
    };
    if(localStorage.getItem(authStorageKey)) defaultState = atob(JSON.parse(localStorage.getItem(authStorageKey)));

    const [auth, changeAuth] = useState(defaultState);
    const actions = {
        getAuth: () => auth,
        setAuth: (__authValues) => {
            // setting the auth in storage
            localStorage.setItem(authStorageKey, btoa(JSON.stringify(__authValues)));

            // setting the axios default authorizaton token
            axios.defaults.headers.common['Authorization'] = `Bearer ${__authValues.authToken}`;

            // setting it int the auth
            changeAuth(__authValues);
        }
    }

    return <AuthContext.Provider value={{actions}}>
        {children}
    </AuthContext.Provider>
}

export {AuthContext, Auth};
