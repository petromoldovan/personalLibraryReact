var expect = require('chai').expect;

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
        expect(
            coreReducer(fromJS([]), {
                type: constants.AUTH_USER,
                payload: true
            })
        ).to.deep.equal(fromJS(
            {
                data: {
                    user: {
                        isAuthenticated: true
                    }
                }
            }
        ))
    })
})
