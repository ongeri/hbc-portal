import * as React from "react";
import {ComponentState} from "react";
import {Route, RouteComponentProps} from "react-router";
import LoginForm from "../LoginForm/LoginForm";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";
import {Link} from "react-router-dom";


interface MatchParams {
    name: string;
}

// Props from parent element
export interface OwnProps {
}

// Props from redux store state
interface StateProps {
}

export type Props = StateProps & OwnProps & RouteComponentProps<MatchParams>

class AuthPage extends React.Component<Props, ComponentState> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    public render() {
        console.log("Rendering authpage", this.props.match.path);
        return (
            <div className={"row"}>
                <div className={"col-md"}>
                    <span>Some authpage nonsense</span>
                    <Link className={"btn btn-sm"} to={this.props.match.path + "/login"}>Login</Link>
                    <Link to={this.props.match.path + "/recover"}>Reset</Link>
                    {/*<Route exact={true} path="/auth">*/}
                    {/*<Redirect to={this.props.match.path + "/login"}/>*/}
                    {/*</Route>*/}
                    <Route path={this.props.match.path + "/login"} component={LoginForm}/>
                    <Route path={this.props.match.path + "/recover"} component={ResetPasswordForm}/>
                </div>
            </div>
        );
    }
}

export default AuthPage;
