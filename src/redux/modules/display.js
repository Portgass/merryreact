import { Map } from 'immutable';

// Constants

const SET_TEXT = 'merryreact/display/SET_TEXT';
const SET_DELAY = 'merryreact/display/SET_DELAY';

// Action Creators

export function setText(text) {
    return { type: SET_TEXT, text };
}

export function setDelay() {
    return { type: SET_DELAY };
}

// Reducer
export const defaultState = Map({
    text: "Hello!",
    delay: 5000
});

export default function(state = defaultState, action) {
    switch (action.type) {
        case SET_TEXT:
            return state.set('text', action.text );
        case SET_DELAY:
            return state.set('delay', 0 );
        default:
            return state;
    }
}
