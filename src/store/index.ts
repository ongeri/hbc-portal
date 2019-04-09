import {combineReducers} from "redux";
import {authReducer, AuthState} from "./Auth/reducer";
import {quotesReducer} from "./Quotes/reducer";

export interface RootReducer {
    authReducer: AuthState,
    quotesReducer: any
}

// We combine the Quotes here so that they can be left split apart above
const rootReducer = combineReducers<RootReducer>({
    authReducer,
    quotesReducer
});

export default rootReducer