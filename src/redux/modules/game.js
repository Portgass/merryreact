import { Map, List } from 'immutable';

// Constants

const INIT_LOCATIONS = 'game/INIT_LOCATIONS';
export const FETCH_LOCATION = 'game/FETCH_LOCATION';
const SET_LOCATION = 'game/SET_LOCATION';

// Action Creators

export function initLocations(locations) {
    return { type: INIT_LOCATIONS, locations };
}

export function fetchLocation(id) {
    return { meta: { fetch: true }, type: FETCH_LOCATION, id };
}

export function setLocation(location) {
    return { type: SET_LOCATION, location };
}

// Reducer
export const defaultState = Map({
    currentLocation: Map({}),
    locations: List([])
});

export default function(state = defaultState, action) {
    switch (action.type) {
        case INIT_LOCATIONS:
            return state.set('locations', action.locations);
        case SET_LOCATION:
            return state.set('currentLocation', action.location);
        default:
            return state;
    }
}
