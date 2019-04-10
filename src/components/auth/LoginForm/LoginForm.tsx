import * as React from "react";
import "./LoginForm.css"
import {Link, Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {emailValidationSchema} from "../../../utils/ValidationSchemaConstants";
import {Dispatch} from "redux";
import {attemptLogin} from "../../../store/Auth/actions";
import {connect} from "react-redux";
import {RootState} from "../../../store";

interface MatchParams {
    name: string;
}

// Props from parent element
export interface OwnProps {
}

// Props from store store state
interface StateProps {
    loggedIn: boolean;
}

// Interface to collect actions that can be done to store store by this component
interface DispatchProps {
    attemptLogin: (credentials: LoginCredentials) => void
}

type Props = StateProps & DispatchProps & OwnProps & RouteComponentProps<MatchParams>


// Internal state of component
interface InternalState {
}

type State = InternalState & StateProps;

class LoginForm extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/dashboard'}};
        if (this.props.loggedIn) {
            console.warn("Redirecting from login page because user is already logged in");
            return <Redirect to={from}/>
        }
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


function mapStateToProps(state: RootState, ownProps: OwnProps): StateProps {
    return {loggedIn: state.authState.isAuthenticated};
}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: OwnProps): DispatchProps {
    return {attemptLogin: (history) => dispatch(attemptLogin(history))};
}

// export default LoginForm;
export default withRouter(connect<StateProps, (dispatch: Dispatch<any>, ownProps: OwnProps) => DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(LoginForm));
