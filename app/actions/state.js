import constants from '../constants';


export function authUserAction(){
    return {
        type: constants.AUTH_USER,
        payload: true
    }
}

export function setUserDetails(data) {
    return {
        type: constants.SET_USER_DETAILS,
        payload: data
    }
}

export function setUserBooks(data) {
    return {
        type: constants.SET_USER_BOOKS,
        payload: data
    }
}

export function appendBookToList(data) {
    return {
        type: constants.APPEND_BOOK_TO_LIST,
        payload: data
    }
}

export function toggleSelectedBook(id) {
    return {
        type: constants.TOGGLE_SELECTED_BOOK,
        payload: id
    }
}

export function setLocation(pathname=null) {
    return {
        type: constants.SET_LOCATION,
        payload: pathname
    }
}
