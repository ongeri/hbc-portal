// There are three possible states for our logins process and we need actions for each of them
import axios, {AxiosResponse} from "axios";
import {Dispatch} from "redux";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogin(loginCredentials: LoginCredentials) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        loginCredentials
    }
}

function receiveLogin(token: string) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: token
    }
}

function loginError(message: APIError) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}


// Logs the user out
export function logoutUser() {
    return (dispatch: Dispatch<any>) => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        localStorage.removeItem('access_token');
        dispatch(receiveLogout())
    }
}

// Calls the API to get a token and dispatches actions along the way
export function fetchTransactions(loginCredentials: LoginCredentials) {
    return (dispatch: Dispatch<any>) => {
        console.warn("Attempt login called as store action");
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(loginCredentials));
        return axios.post(process.env.REACT_APP_BASE_URL + '/auth/login', loginCredentials, {
            headers: {
                Authorization: 'Bearer ' + "asdfasd"
            }
        })
            .then((response: AxiosResponse<AuthResponse>) => {
                // handle success
                console.log("Authentication response: ", response);
                // If login was successful, set the token in local storage
                localStorage.setItem('id_token', response.data.token);
                // Dispatch the success action
                dispatch(receiveLogin(response.data.token));
            })
            .catch(error => {
                // handle error
                console.log(error);
                dispatch(loginError(error));
            })
            .then(() => {
                // always executed
                console.log("An api request was completed");
            });
    }
}
