// There are three possible states for our logins process and we need actions for each of them
import axios, {AxiosResponse} from "axios";
import {Dispatch} from "redux";
import * as H from "history";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

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

// Calls the API to get a token and dispatches actions along the way
export function attemptLogin(history: H.History, loginCredentials: LoginCredentials) {
    return (dispatch: Dispatch<any>) => {
        console.warn("Attempt login called as redux action");
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(loginCredentials));
        return axios.post(process.env.REACT_APP_BASE_URL + '/authentication', loginCredentials, {
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
                history.push('/');
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
