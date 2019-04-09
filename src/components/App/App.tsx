import * as React from 'react';
import './App.css';
import {Link} from "react-router-dom";

class App extends React.Component {
    public render() {
        return (
            <div className="row">
                <div className="col-md">
                    <Link className="btn btn-sm btn-primary" to={"/auth/login"}>Login</Link>
                    <Link className="btn btn-sm btn-dark" to={"/auth/recover"}>Recover</Link>
                    <p>
                        A public landing page
                    </p>
                    <Link to={"/dashboard"}>Go to dashboard</Link>
                </div>
            </div>
        );
    }
}

export default App;
