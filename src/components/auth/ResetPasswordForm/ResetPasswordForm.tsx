import * as React from "react";
import {ComponentState} from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import "./ResetPasswordForm.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {emailValidationSchema} from "../../../utils/ValidationSchemaConstants";
import axios from 'axios'

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
        console.log("Reset password form created");
    }

    render() {
        return <div className={"col-md authPanel mx-auto "}>
            <img className={"thumbnail mx-auto "} src={"/images/county_logo.png"} width="120px" height="120px"/>
            <h5 className={"authTitle"}>Recover Password</h5>
            <small>Enter your email below to get a temporary password.</small>
            <Formik
                validationSchema={emailValidationSchema}
                initialValues={{email: ""}}
                onSubmit={(values, {setSubmitting}) => {
                    console.log("Form submit clicked with the following values: ", values);
                    // Make a request for a user with a given ID
                    axios.post(process.env.REACT_APP_BASE_URL + '/authentication', {
                        username: values.email,
                        password: 'Flintstone'
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
                {({isSubmitting}) => <Form>
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
                                   placeholder="Email Address"/>
                        </div>
                        <ErrorMessage name="email" className="text-danger" component={"small"}/>
                    </div>
                    <button type="submit" className="btn btn-warning mx-auto form-button"
                            style={{display: "block", color: "white"}} disabled={isSubmitting}>Recover my account
                    </button>
                </Form>}
            </Formik>
            <Link to="/auth/login" style={{color: "orange", textAlign: "center", display: "block"}}>Return to
                login</Link>
        </div>;
    }
}

export default ResetPasswordForm;
