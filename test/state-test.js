const expect = require('chai').expect;

import {store} from '../app/store';
import constants from '../app/constants';


describe('store', ()=>{
    it("test the initial state", () => {
        let actual = store.getState();
        const expected = {
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
        };

        expect(actual.toJS()).to.deep.equal(expected);
    });

    it("store should handle all actions properly", () => {
        let books = [{title: 'bio', author: 'some-dude'}, {title: 'random title', author: 'very smart one'}]
        let actions = [
            {
                type: constants.TOGGLE_SELECTED_BOOK,
                payload: 3
            },
            {
                type: constants.AUTH_USER,
                payload: true
            },
            {
                type: constants.SET_LOCATION,
                payload: '/addUser'
            },
            {
                type: constants.SET_USER_BOOKS,
                payload: books
            }
        ];

        actions.forEach(action => store.dispatch(action));

        let actual = store.getState();
        let expected = {
            data: {
                user: {
                    isAuthenticated: true,
                    details: {}
                },
                books: {
                    selected: 3,
                    all: books
                }
            },
            ui: {
                location: '/addUser'
            }
        }


        expect(actual.toJS()).to.deep.equal(expected)
    })
})
