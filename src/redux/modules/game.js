import { Map, List } from 'immutable';

// Constants

const INIT_LOCATIONS = 'game/INIT_LOCATIONS';
export const CHANGE_LOCATION = 'game/CHANGE_LOCATION';

const PICKUP_ITEM = 'game/PICKUP_ITEM';

const INVESTIGATE = 'game/INVESTIGATE';

const ADD_MESSAGE = 'game/ADD_MESSAGE';


// Action Creators

export function initLocations(locations) {
    return { type: INIT_LOCATIONS, locations };
}

export function changeLocation(location) {
    return { type: CHANGE_LOCATION, location };
}

export function pickupItem(item) {
    return { type: PICKUP_ITEM, item };
}

export function investigate(place) {
    return { type: INVESTIGATE, place };
}

export function addMessage(text) {
    return { type: ADD_MESSAGE, text };
}

// Reducer
export const defaultState = Map({
    inventory: List([]),
    currentLocation: Map({}),
    messages: List([]),
    locations: List([])
});

export default function(state = defaultState, action) {
    switch (action.type) {
        case INIT_LOCATIONS:
            return state.set('locations', action.locations);
        case CHANGE_LOCATION:
            const location = state.get('locations').find(l => {
                return l.get('id') === action.location
            });
            state = state.update('locations', locations => {
                return locations.map(l => {
                    if(l.get('id') === state.get('currentLocation').get('id'))
                        return state.get('currentLocation');
                    else
                        return l;
                });
            });
            state = state.updateIn(['messages'], m => {
                return m.push(location.get('onEnter'))
            });
            return state.set('currentLocation', location);
        case PICKUP_ITEM:
            state = state.updateIn(['currentLocation', 'items'], items => {
                return items.filter(i => i.get('id') !== action.item.get('id'))
            });
            if(action.item.get('onPickup'))
                state = state.updateIn(['messages'], m => {
                    return m.push(action.item.get('onPickup'))
                });
            return state.update('inventory', i => i.push(action.item));
        case INVESTIGATE:
            if(action.place.get('onInvestigate').has('unlockItem')) {
                state = state.updateIn(['currentLocation', 'items'], items => {
                    return items.push(action.place.getIn(['onInvestigate', 'unlockItem', 'item']))
                });

                state = state.updateIn(['currentLocation', 'places'], places => {
                    return places.map(place => {
                        if(place.get('id') === action.place.get('id')) {
                            place = place.setIn(['onInvestigate', 'message'],
                                action.place.getIn([
                                    'onInvestigate',
                                    'unlockItem',
                                    'afterUnlockMessage'
                                ])
                            );

                            place = place.update('onInvestigate', on => {
                                return on.delete('unlockItem')
                            });
                        }
                        return place;
                    });
                });
            }

            return state.updateIn(['messages'], messages => {
                return messages.push(action.place.getIn(['onInvestigate', 'message']))
            });

        case ADD_MESSAGE:
            return state.updateIn(['messages'], m => m.push(action.text));
        default:
            return state;
    }
}
