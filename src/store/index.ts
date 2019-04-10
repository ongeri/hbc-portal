import {combineReducers} from "redux";
import {authState} from "./Auth/reducer";
import {quotesState} from "./Quotes/reducer";
import {AuthState} from "./Auth/types";

export interface RootState {
    authState: AuthState,
    quotesState: any
}

// We combine the Quotes here so that they can be left split apart above
const rootState = combineReducers<RootState>({
    authState: authState,
    quotesState: quotesState
});

export default rootState