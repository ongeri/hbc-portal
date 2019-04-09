import {combineReducers} from "redux";
import {authReducer, AuthState} from "./AuthReducer";
import {quotesReducer} from "./QuotesReducer";

export interface RootReducer {
    authReducer: AuthState,
    quotesReducer: any
}

// We combine the reducers here so that they can be left split apart above
const rootReducer = combineReducers<RootReducer>({
    authReducer,
    quotesReducer
});

export default rootReducer