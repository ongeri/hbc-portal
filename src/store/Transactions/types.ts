import {AppAction} from "../types";
import {User} from "../../models/User";

export interface AuthAction extends AppAction {
}


export type AuthState = Readonly<{
    isFetching: boolean,
    isAuthenticated: boolean,
    user?: User
}>