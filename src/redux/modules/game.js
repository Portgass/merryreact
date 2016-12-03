import { Map, List } from 'immutable';

// Constants

const INIT_LOCATIONS = 'game/INIT_LOCATIONS';
export const FETCH_LOCATION = 'game/FETCH_LOCATION';
export const CHANGE_LOCATION = 'game/CHANGE_LOCATION';
const SET_LOCATION = 'game/SET_LOCATION';
const PICKUP_ITEM = 'game/PICKUP_ITEM';


// Action Creators

export function initLocations(locations) {
    return { type: INIT_LOCATIONS, locations };
}

export function fetchLocation(id) {
    return { meta: { fetch: true }, type: FETCH_LOCATION, id };
}

export function changeLocation(id) {
    return { meta: { fetch: true }, type: CHANGE_LOCATION, id };
}

export function setLocation(location) {
    return { type: SET_LOCATION, location };
}

export function pickupItem(item) {
    return { type: PICKUP_ITEM, item };
}

// Reducer
export const defaultState = Map({
    currentLocation: Map({}),
    locations: List([]),
    inventory: List([])
});

export default function(state = defaultState, action) {
    switch (action.type) {
        case INIT_LOCATIONS:
            return state.set('locations', action.locations);
        case SET_LOCATION:
            state = state.update('locations', locations => {
                return locations.map(l => {
                    if(l.get('id') === state.get('currentLocation').get('id'))
                        return state.get('currentLocation');
                    else
                        return l;
                });
            });
            return state.set('currentLocation', action.location);
        case PICKUP_ITEM:
            state = state.updateIn(['currentLocation', 'items'], items => {
                return items.filter(i => i.get('id') !== action.item.get('id'))
            });
            return state.update('inventory', i => i.push(action.item));
        default:
            return state;
    }
}
