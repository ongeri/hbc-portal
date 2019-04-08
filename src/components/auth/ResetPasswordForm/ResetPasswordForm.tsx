import * as React from "react";
import {ComponentState} from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import "./ResetPasswordForm.css"
import {ErrorMessage, Field, Form, Formik} from "formik";

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
                initialValues={{email: ""}}
                validate={values => {
                    const errors: any = {};// Beware, if this has default non-null values validation will never allow form submission
                    if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    console.log("Form submit clicked with the following values: ", values);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
