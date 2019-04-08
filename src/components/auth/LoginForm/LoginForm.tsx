import * as React from "react";
import {ComponentState} from "react";
import "./LoginForm.css"
import {Link, RouteComponentProps} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {emailValidationSchema} from "../../../utils/ValidationSchemaConstants";
import axios from "axios";

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
                <Formik
                    validationSchema={emailValidationSchema}
                    initialValues={{
                        email: "",
                        password: ""
                    }} // Note that passwords should not be validated except in sign up forms
                    onSubmit={(values, {setSubmitting}) => {
                        console.log("Form submit clicked with the following values: ", values);
                        // Make a request for a user with a given ID
                        axios.post(process.env.REACT_APP_BASE_URL + '/authentication', {
                            username: values.email,
                            password: values.password
                        })
                            .then(function (response) {
                                // handle success
                                console.log(response);
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .then(function () {
                                // always executed
                                console.log("An api request was completed");
                                setSubmitting(false);
                            });
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

export default LoginForm;
