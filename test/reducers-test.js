const expect = require('chai').expect;

import coreReducer from '../app/reducers';
import constants from '../app/constants';
import {fromJS, Map, List} from 'immutable';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(coreReducer(undefined, {})).to.deep.equal(fromJS({
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
        }))
    })

    it('should handle AUTH_USER', () => {
        let expected = coreReducer(fromJS({}), {
            type: constants.AUTH_USER,
            payload: true
        });

        expect(expected.toJS()).to.deep.equal(
            {
                data: {
                    user: {
                        isAuthenticated: true
                    }
                }
            }
        )
    })

    it('should set data.user.isAuthentificated to false', () => {
        let expected = coreReducer(fromJS({}), {
            type: constants.AUTH_USER,
            payload: false
        });

        expect(expected.toJS()).to.deep.equal(
            {
                data: {
                    user: {
                        isAuthenticated: false
                    }
                }
            }
        )
    })

    it('should handle TOGGLE_SELECTED_BOOK action', () => {
        const bookID = 13;

        let expected = coreReducer(fromJS({}), {
            type: constants.TOGGLE_SELECTED_BOOK,
            payload: bookID
        });

        expect(expected.toJS()).to.deep.equal(
            {
                data: {
                    books: {
                        selected: bookID
                    }
                }
            }
        )
    })
});
