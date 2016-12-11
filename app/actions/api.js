import constants from '../constants';
import Api from '../lib/api';
import {browserHistory} from 'react-router';
import jwt from 'jsonwebtoken'

import {
    authUserAction,
    setUserDetails,
    setUserBooks,
    appendBookToList,
    setLocation
} from './state';

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
            const token = resp.token;
            if (token){
                localStorage.setItem('jwtToken', token);
                const user = jwt.decode(token);
                dispatch(authUserAction());
                dispatch(setUserDetails(user));
                dispatch(setLocation('library'));
                browserHistory.push('library');
            }
        })
        .catch((err)=>{
            console.log("smth went wrong")
        })
    }
}

export function addNewBook(data) {
    return (dispatch) => {
        const api = new Api();
        api.addNewBook(data)
        .then((resp)=>{
            dispatch(appendBookToList(data.data))
                console.log("got the book")
        })
        .catch((err)=>{
            console.log(`Error occurred ${err}`)
        })
    }
}
