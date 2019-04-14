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
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <svg className="svg-inline--fa fa-align-justify fa-w-14" aria-hidden="true"
                         data-prefix="fas" data-icon="align-justify" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm16 144h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0-128h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Landing page</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-sm btn-primary" onClick={this.tryLogout}> Sign Out</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>;
    }

    tryLogout = () => {
        this.props.requestLogout();
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: OwnProps): DispatchProps {
    return {requestLogout: () => dispatch(logoutUser())};
}

export default withRouter(connect<StateProps, (dispatch: Dispatch<any>, ownProps: OwnProps) => DispatchProps, OwnProps>(null, mapDispatchToProps)(Header));
