import {fromJS, Map, List} from 'immutable';


const intialState = fromJS({
    initial: {}
})


function testState(state, action) {
    return state.set(['data', 'test'], 'did not work');
}

export function coreReducer(state=intialState, action) {
    let newState;
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'test':
            newState = testState(state, action)
            break;
        default:
            newState = state;
    }

    return newState;
}

export default coreReducer;