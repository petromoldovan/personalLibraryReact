import constants from '../constants';

import {users} from '../constants';

export function authUserAction(data){

    var auth = true
    if(!userVerified(data)) auth = false;

    return {
        type: constants.AUTH_USER,
        payload: auth
    }
}

function userVerified(data) {
    if (users[data.user] == data.password) return true;

    return;
}

export function setUserBooks(data) {
    return {
        type: constants.SET_USER_BOOKS,
        payload: data
    }
}
