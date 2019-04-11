import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "./actions";
import {AuthAction, AuthState} from "./types";

// The starting state sets authentication based on a token being in local storage.
// In a real app,we would also want a util to check if the token is expired.
const initialAuthState: AuthState = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token')
};

// The authState reducer.
export function authState(state: AuthState = initialAuthState, action: AuthAction): AuthState {
    console.error("Auth reducer action " + action.type + " has been received");
    console.warn("Current state: ", state);
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false
            });
        default:
            console.error("Returning unchanged state for action: ", action);
            return state
    }
}