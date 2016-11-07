import {fromJS, Map, List} from 'immutable';

import constants from './constants';


const intialState = {
    data: {
        user: {
            isAuthenticated: false
        },
        books: {
            selected: [],
            all: []
        }
    }
}


function setUserAuth(state, action) {
    return state.setIn(['data', 'user', 'isAuthenticated'], fromJS(action.payload))
}

export function coreReducer(state=intialState, action) {
    let newState;
    switch (action.type) {
        case constants.AUTH_USER:
            newState = setUserAuth(state, action)
            break;
        default:
            newState = state;
    }
    return newState;
}

export default coreReducer;