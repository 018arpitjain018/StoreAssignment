import {createSlice} from '@reduxjs/toolkit';
import { loginAction, logoutAction, setTokenAction } from './actions';

/**
 * The initialState object represents the initial state of the Auth slice of the Redux store. 
 * It contains two properties: token and email.
 */
const initialState = {
    token: null,
    email: null
}

/**
 * The Redux store that handles the state of the authentication system. 
 * It provides three actions: login, logout, and setToken.
 * 
 * * login: a reducer function that updates the state with a new token and email value.
 * * logout: a reducer function that updates the state to remove the token and email values.
 * * setToken: a reducer function that updates the state with a new token and email value.
 */
export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: initialState,
    reducers: {
        login: loginAction,
        logout: logoutAction,
        setToken: setTokenAction
    }
});

export const { login, logout, setToken } = AuthSlice.actions
export default AuthSlice.reducer;
