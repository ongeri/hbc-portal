import * as React from "react";
import {ComponentState} from "react";
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

class ResetPasswordForm extends React.Component<Props, ComponentState> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div>Reset password form
                <Link className={"btn btn-sm"} to="/auth/login">Login</Link>
            </div>
        );
    }
}

export default ResetPasswordForm;
