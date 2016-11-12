import constants from '../constants';
import Api from '../lib/api';

import {setUserBooks} from './state';

export function getUserBooks(){
    return (dispatch) => {
        const api = new Api();
        api.getUserBooks()
            .then((resp) => {
                dispatch(setUserBooks(resp))
            })
        .catch((err) => {
            console.log(err)
        })
    }

}