import {fromJS, Map, List, Set} from 'immutable';

import constants from './constants';


const intialState = fromJS({
    data: {
        user: {
            isAuthenticated: false,
            details: {}
        },
        books: {
            selected: [],
            all: []
        }
    }
});


function setUserAuth(state, action) {
    return state.setIn(['data', 'user', 'isAuthenticated'], fromJS(action.payload))
}

function setUserDetails(state, action) {
    return state.setIn(['data', 'user', 'details'], fromJS(action.payload))
}

function setUserBooks(state, action) {
    return state.setIn(['data', 'books', 'all'], fromJS(action.payload))
}

function appendBookToList(state, action) {
    return state.updateIn(['data', 'books', 'all', 'books'], (books)=>{
        let data = [];
        let newBook = action.payload;
        if (books) data = books.toJS();

        return Set(data).concat(newBook)
    })
}

function toggleSelectedBook(state, action) {
    let selectedBooks = state.getIn(['data', 'books', 'selected'], []);
    if (selectedBooks && selectedBooks.indexOf(action.payload) > - 1) return;

    selectedBooks.push(action.payload);

    return state.setIn(['data', 'books', 'selected'], fromJS(action.payload))
}

function setLocation(state, action) {
    return state.setIn(['ui', 'location'], fromJS(action.payload))
}

export function coreReducer(state=intialState, action) {
    let newState;
    switch (action.type) {
        case constants.AUTH_USER:
            newState = setUserAuth(state, action)
            break;
        case constants.SET_USER_DETAILS:
            newState = setUserDetails(state, action)
            break;
        case constants.SET_USER_BOOKS:
            newState = setUserBooks(state, action)
            break;
        case constants.APPEND_BOOK_TO_LIST:
            newState = appendBookToList(state, action)
            break;
        case constants.TOGGLE_SELECTED_BOOK:
            newState = toggleSelectedBook(state, action)
            break;
        case constants.SET_LOCATION:
            newState = setLocation(state, action)
            break;
        default:
            newState = state;
    }
    return newState;
}

export default coreReducer;