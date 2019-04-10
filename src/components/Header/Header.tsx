import * as React from 'react';
import "./Header.css"
import {RouteComponentProps, withRouter} from "react-router";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {logoutUser} from "../../store/Auth/actions";
import {Link} from "react-router-dom";

interface MatchParams {
    name: string;
}

// Props from parent element
export interface OwnProps {
}

// Props from store store state
interface StateProps {
}

// Interface to collect actions that can be done to store store by this component
interface DispatchProps {
    requestLogout: () => void;
}

type Props = StateProps & DispatchProps & OwnProps & RouteComponentProps<MatchParams>


// Internal state of component
interface InternalState {
}

type State = InternalState & StateProps;

class Header extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    render() {
        return <div className="row">
            <div className="col-md header">
                A header section
                <button className={"btn btn-sm btn-primary"} onClick={this.tryLogout}> Sign Out</button>
                <Link to='/'>Landing page</Link>
            </div>
        </div>;
    }

    tryLogout = () => {
        this.props.requestLogout();
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: OwnProps): DispatchProps {
    return {requestLogout: () => dispatch(logoutUser())};
}

export default withRouter(connect<StateProps, (dispatch: Dispatch<any>, ownProps: OwnProps) => DispatchProps, OwnProps>(null, mapDispatchToProps)(Header));
