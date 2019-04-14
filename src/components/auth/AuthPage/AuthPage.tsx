import * as React from "react";
import {ComponentState} from "react";
import {Redirect, Route, RouteComponentProps, Switch} from "react-router";
import LoginForm from "../LoginForm/LoginForm";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";
import "./AuthPage.css"

interface MatchParams {
    name: string;
}

// Props from parent element
export interface OwnProps {
}

// Props from store store state
interface StateProps {
}

type Props = StateProps & OwnProps & RouteComponentProps<MatchParams>

class AuthPage extends React.Component<Props, ComponentState> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    public render() {
        console.log("Rendering authPage", this.props.match.path);
        return (
            <div className="row authPage">
                <Switch>
                    <Redirect exact={true} from="/auth" to="/auth/login"/>
                    <Route path="/auth/login" component={LoginForm}/>
                    <Route path="/auth/recover" component={ResetPasswordForm}/>
                </Switch>
                <img className="powered-by-logo" src="/images/powered_by_interswitch.png"/>
            </div>
        );
    }
}

export default AuthPage;
