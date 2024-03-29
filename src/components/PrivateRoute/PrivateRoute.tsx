import * as React from 'react';
import {Redirect, Route, RouteComponentProps, RouteProps, withRouter} from "react-router";
import {connect} from "react-redux";
import {RootState} from "../../store";

// Props from store store state
interface StateProps {
    loggedIn: boolean
}

// Props from parent element
export interface OwnProps {
}

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

type Props = StateProps & PrivateRouteProps & OwnProps;

type RenderComponent = (props: RouteComponentProps<any>) => React.ReactNode;

class PrivateRoute extends Route<Props> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    render() {
        const {component: Component, ...rest}: PrivateRouteProps = this.props;
        console.log("Is logged in? " + this.props.loggedIn);
        const renderComponent: RenderComponent = (props) => (
            this.props.loggedIn
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/auth/login',
                    state: {from: props.location}
                }}/>
        );

        return (
            <Route {...rest} render={renderComponent}/>
        );
    }
}

function mapStateToProps(state: RootState, ownProps: OwnProps): StateProps {
    return {loggedIn: state.authState.isAuthenticated};
}


export default withRouter(connect<StateProps, any, any>(mapStateToProps)(PrivateRoute));
