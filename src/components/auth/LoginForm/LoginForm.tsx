import * as React from "react";
import {ComponentState} from "react";
import "./LoginForm.css"
import {Link, RouteComponentProps} from "react-router-dom";

interface MatchParams {
    name: string;
}

// Props from parent element
export interface OwnProps {
}

// Props from redux store state
interface StateProps {
}

type Props = StateProps & OwnProps & RouteComponentProps<MatchParams>

class LoginForm extends React.Component<Props, ComponentState> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    public render() {
        return (<div className={"col-md authPanel mx-auto "}>
                <img className={"thumbnail mx-auto "} src={"/images/county_logo.png"} width="120px" height="120px"
                />
                <h5 className={"authTitle"}>Welcome Back</h5>
                <form>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <span className="oi oi-person"/>
                                </span>
                            </div>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <span className="oi oi-key"/>
                                </span>
                            </div>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning mx-auto form-button"
                            style={{display: "block", color: "white"}}>Login
                    </button>
                </form>
                <Link to="/auth/recover" style={{color: "orange", textAlign: "center", display: "block"}}>Forgot
                    password?</Link>
            </div>
        );
    }
}

export default LoginForm;
