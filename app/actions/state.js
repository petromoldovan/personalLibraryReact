import constants from '../constants';


export function authUserAction(bool){
    return {
        type: constants.AUTH_USER,
        payload: bool
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
