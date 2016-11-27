import { Map, List } from 'immutable';

// Constants

const ADD_MESSAGE = 'display/ADD_MESSAGE';
const REMOVE_FIRST_MESSAGE = 'display/REMOVE_FIRST_MESSAGE';
const SET_DELAY = 'display/SET_DELAY';

// Action Creators

export function addMessage(text) {
    return { type: ADD_MESSAGE, text };
}

export function removeFirstMessage() {
    return { type: REMOVE_FIRST_MESSAGE };
}

export function setDelay() {
    return { type: SET_DELAY };
}

// Reducer
export const defaultState = Map({
    messages: List(['Hello!']),
    delay: 1000
});

export default function(state = defaultState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return state.updateIn(['messages'], m => m.push(action.text));
        case REMOVE_FIRST_MESSAGE:
            return state.set('messages', state.get('messages').shift());
        case SET_DELAY:
            return state.set('delay', 0 );
        default:
            return state;
    }
}
