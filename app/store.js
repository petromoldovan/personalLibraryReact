import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import coreReducer from './reducers'


const logger = createLogger({
    stateTransformer: state =>state.toJS()
});

export const store = createStore(
    coreReducer,
    applyMiddleware(thunk, logger)
);
