import constants from '../constants';

export function authUserAction(data){
    return {
        type: constants.AUTH_USER,
        payload: data
    }
}
