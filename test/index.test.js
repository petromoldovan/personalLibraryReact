var expect = require('chai').expect;
var authUserAction = require('../app/actions/state').authUserAction;


describe('authUserAction', () => {
    let action;

    beforeEach(() => {
        action = authUserAction({user: "admin", password: "1234"});
    });

    it('Should create correct auth action', () => {
        expect(action).to.deep.equal({
            type: 'AUTH_USER',
            payload: true
        })
    })
})

describe('authUserAction', () => {
    let action;

    beforeEach(() => {
        action = authUserAction({user: "invalidUser", password: "invalidPass"});
    });

    it('Should create incorrect auth action', () => {
        expect(action).to.deep.equal({
            type: 'AUTH_USER',
            payload: false
        })
    })
})


import coreReducer from '../app/reducers';
import constants from '../app/constants';
import {fromJS, Map, List} from 'immutable';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(coreReducer(undefined, {})).to.deep.equal({
            data: {
                user: {
                    isAuthenticated: false
                },
                books: {
                    selected: [],
                    all: []
                }
            }
        })
    })

    it('should handle AUTH_USER', () => {
        expect(
            coreReducer([], {
                type: constants.AUTH_USER,
                payload: true
            })
        ).to.deep.equal(
            {
                data: {
                    user: {
                        isAuthenticated: true
                    },
                    books: {
                        selected: [],
                        all: []
                    }
                }
            }
        )
    })
})