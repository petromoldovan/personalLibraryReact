import constants from '../constants';

import {users} from '../constants';

export function authUserAction(bool){
    return {
        type: constants.AUTH_USER,
        payload: bool
    }
}

export function setUserBooks(data) {
    return {
        type: constants.SET_USER_BOOKS,
        payload: data
    }
}
