import {combineReducers} from 'redux'
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions/login_actions";
import {LOGOUT_SUCCESS} from "../actions/logout_actions";
import {AppAction} from "../actions/ActionTypes";
import {User} from "../models/User";


export type ApplicationState = Readonly<{
    isFetching: boolean,
    isAuthenticated: boolean,
    user?: User
}>
// The starting state sets authentication based on a token being in local storage.
// In a real app,we would also want a util to check if the token is expired.
const initialState: ApplicationState = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token')
};

// The authReducer reducer.
function authReducer(state: ApplicationState = initialState, action: AppAction): ApplicationState {
    console.error("Auth reducer action " + action.type + " has been received");
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
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        default:
            return state
    }
}

// The quotesReducer reducer
function quotesReducer(state = {}, action: any) {
    switch (action.type) {
        default:
            return state
    }
}

// We combine the reducers here so that they can be left split apart above
const rootReducer = combineReducers({
    authReducer: authReducer,
    quotesReducer: quotesReducer
});

export default rootReducer