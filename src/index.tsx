import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import App from './components/App/App';
import AuthPage from "./components/auth/AuthPage/AuthPage";
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import rootReducer from "./redux/reducers";
import DashBoard from "./components/DashBoard/DashBoard";

// const store = createStore(rootReducer, applyMiddleware(thunk));

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={App}/>
                <PrivateRoute exact={true} path="/dashboard" component={DashBoard}/>
                <Route path="/auth" component={AuthPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
