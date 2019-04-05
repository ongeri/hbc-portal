import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import App from './components/App/App';
import AuthPage from "./components/auth/AuthPage/AuthPage";
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route path="/auth" component={AuthPage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
