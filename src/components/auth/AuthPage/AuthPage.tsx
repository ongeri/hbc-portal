import * as React from "react";
import {Route} from "react-router";
import LoginForm from "../LoginForm/LoginForm";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";

class AuthPage extends React.Component {
    public render() {
        return (
            <div>
                <span>Some authpage nonsense</span>
                <Route exact={true} path="/login" component={LoginForm}/>
                <Route exact={true} path="/auth/recover" component={ResetPasswordForm}/>
                <Route exact={true} path="recover" component={ResetPasswordForm}/>
                <Route exact={true} path='${match.path}/recover' component={ResetPasswordForm}/>
                <Route exact={true} path="./recover" component={ResetPasswordForm}/>
            </div>
        );
    }
}

export default AuthPage;
