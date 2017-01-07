import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import jwt from 'jsonwebtoken';

import AppCont from './containers/AppCont';
import LoginCont from './containers/LoginCont';
import LibCont from './containers/LibCont';
import {authUserAction, setUserDetails} from './actions/state';
import {store} from './store';


if(localStorage.jwtToken) {
    store.dispatch(authUserAction())
    store.dispatch(setUserDetails(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render((
    <Provider store={store} >
        <Router history={browserHistory} >
            <Route path="/" component={AppCont} >
                <IndexRoute component={LoginCont} />
                <Route path="/library" component={LibCont} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
