import * as React from "react";
import "./LoginForm.css"
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {emailValidationSchema} from "../../../utils/ValidationSchemaConstants";
import {Dispatch} from "redux";
import {attemptLogin} from "../../../actions/login_actions";
import {connect} from "react-redux";
import {ApplicationState} from "../../../reducers/reducer";
import * as H from "history";

interface MatchParams {
    name: string;
}

// Props from parent element
export interface OwnProps {
}

// Props from redux store state
interface StateProps {
}

// Interface to collect actions that can be done to redux store by this component
interface DispatchProps {
    attemptLogin: (history: H.History, credentials: LoginCredentials) => void
}

// Props from redux store state
interface StateProps {
}

type Props = StateProps & DispatchProps & StateProps & OwnProps & RouteComponentProps<MatchParams>


// Internal state of component
interface InternalState {
    loggedIn: boolean;
}

class LoginForm extends React.Component<Props, InternalState> {
    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {loggedIn: false};
    }

    render() {
        return (
            <div className={"col-md authPanel mx-auto "}>
                <img className={"thumbnail mx-auto "} src={"/images/county_logo.png"} width="120px" height="120px"
                />
                <h5 className={"authTitle"}>Welcome Back</h5>
                <Formik
                    validationSchema={emailValidationSchema}
                    initialValues={{
                        email: "",
                        password: ""
                    }} // Note that passwords should not be validated except in sign up forms
                    onSubmit={(values, {setSubmitting}) => {
                        console.log("Form submit clicked with the following values: ", values);
                        this.props.attemptLogin(
                            this.props.history,
                            {
                                username: values.email,
                                password: values.password
                            }
                        );
                    }}
                >
                    {() => <Form>
                        <div className="form-group mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <span className="oi oi-person"/>
                                </span>
                                </div>
                                <Field type="email"
                                       name="email"
                                       id="email"
                                       className="form-control"
                                       aria-describedby="emailHelp"
                                       placeholder="Email"/>
                            </div>
                            <ErrorMessage name="email" className="text-danger" component={"small"}/>
                        </div>
                        <div className="form-group mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <span className="oi oi-key"/>
                                </span>
                                </div>
                                <Field type="password"
                                       name="password"
                                       id="password"
                                       className="form-control"
                                       placeholder="Password"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning mx-auto form-button"
                                style={{display: "block", color: "white"}}>Login
                        </button>
                    </Form>
                    }
                </Formik>
                <Link to="/auth/recover" style={{color: "orange", textAlign: "center", display: "block"}}>Forgot
                    password?</Link>
            </div>
        );
    }
}


function mapStateToProps(state: ApplicationState, ownProps: OwnProps): StateProps {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: OwnProps): DispatchProps {
    return {attemptLogin: (history, credentials) => dispatch(attemptLogin(history, credentials))};
}

// export default LoginForm;
export default withRouter(connect<StateProps, (dispatch: Dispatch<any>, ownProps: OwnProps) => DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(LoginForm));
