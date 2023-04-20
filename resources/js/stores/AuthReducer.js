import { createSlice } from "@reduxjs/toolkit";

const initAuth = JSON.parse(localStorage.getItem('auth') || "{}");

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: initAuth.token || null,
        id: initAuth.id || null
    },
    reducers: {
        setAuth: (state, action) => {
            if(action.payload.token && action.payload.id){
                state.id = action.payload.id;
                state.token = action.payload.token;
                localStorage.setItem('auth', JSON.stringify({token: action.payload.token, id: action.payload.id}));
            }
        },
        resetAuth: state => {
            state.id = null
            state.token = null;
            localStorage.removeItem('auth');
        }
    }
});

export const {setAuth, resetAuth} = authSlice.actions;
export default authSlice.reducer;
