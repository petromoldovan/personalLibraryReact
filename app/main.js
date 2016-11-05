import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import coreReducer from './reducers'

import AppCont from './containers/AppCont';
import LoginCont from './containers/LoginCont';
import {testAction} from './actions/state';

const store = createStore(coreReducer);

store.dispatch(testAction())

ReactDOM.render((
    <Provider store={store} >
        <Router history={browserHistory} >
            <Route path="/" component={AppCont} >
                <Route path="/login" component={LoginCont} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
