import * as React from "react";
import {ComponentState} from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import "./ResetPasswordForm.css"

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

class ResetPasswordForm extends React.Component<Props, ComponentState> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div className={"col-md authPanel mx-auto "}>
                <img className={"thumbnail mx-auto "} src={"/images/county_logo.png"} width="120px" height="120px"/>
                <h5 className={"authTitle"}>Recover Password</h5>
                <p style={{fontSize: ".85em", padding: 0}}>Enter your email below to get a temporary password.</p>
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
                    <button type="submit" className="btn btn-warning mx-auto form-button"
                            style={{display: "block", color: "white"}}>Recover my account
                    </button>
                </form>
                <Link to="/auth/login" style={{color: "orange", textAlign: "center", display: "block"}}>Return to
                    login</Link>
            </div>
        );
    }
}

export default ResetPasswordForm;
