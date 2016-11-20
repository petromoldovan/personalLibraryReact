var expect = require('chai').expect;
var authUserAction = require('../../app/actions/state').authUserAction;


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
