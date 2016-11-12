import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import coreReducer from './reducers'
import AppCont from './containers/AppCont';
import LoginCont from './containers/LoginCont';
import {authUserAction} from './actions/state';


const logger = createLogger({
    stateTransformer: state =>state.toJS()
});

const store = createStore(
    coreReducer,
    applyMiddleware(thunk, logger)
);

/*store.dispatch(authUserAction())*/

ReactDOM.render((
    <Provider store={store} >
        <Router history={browserHistory} >
            <Route path="/" component={AppCont} >
                <IndexRoute component={LoginCont} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
