import constants from '../constants';
import Api from '../lib/api';

import {setUserBooks} from './state';

export function getUserBooks(opt={}){
    return (dispatch) => {
        const api = new Api();
        api.getUserBooks()
            .then((resp) => {
                dispatch(setUserBooks(resp))
                if(opt.then && opt.then instanceof Function) {opt.then()}
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

export function userLogin(data, opt={}){
    return(dispatch)=>{
        const api = new Api();
        api.login(data)
        .then((resp)=>{
            console.log("user logged in")
        })
        .catch((err)=>{
            console.log("smth went wrong")
        })
    }
}
