import { Map, List } from 'immutable';

// Constants

const INIT_LOCATIONS = 'game/INIT_LOCATIONS';
export const CHANGE_LOCATION = 'game/CHANGE_LOCATION';

const PICKUP_ITEM = 'game/PICKUP_ITEM';

const INVESTIGATE = 'game/INVESTIGATE';

const INTERACT = 'game/INTERACT';

const TALK = 'game/TALK';
const PUSH_CONVERSATION = 'game/PUSH_CONVERSATION';

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

export function interact(item, interactable) {
    return { type: INTERACT, item, interactable };
}

export function talk(character, conversation) {
    return { type: TALK, character, conversation };
}

export function pushConversation() {
    return { type: PUSH_CONVERSATION };
}

export function addMessage(text) {
    return { type: ADD_MESSAGE, text };
}

// Default state
export const defaultState = Map({
    inventory: List([]),
    currentLocation: Map({}),
    currentConversation: List([]),
    messages: List([]),
    locations: List([])
});

// Helpers

function sendMessage(state, message) {
    return state.updateIn(['messages'], messages => {
        return messages.push(message);
    });
}

function spawnItem(state, event) {
    const item = event.get('item');

    if(!state.get('currentLocation').has('items'))
        state = state.setIn(['currentLocation', 'items'], List([]));

    state = state.updateIn(['currentLocation', 'places'], places => {
        return places.map(place => {
            if(place.get('id') === event.get('from'))
                place = place.updateIn(['onInvestigate', 'events'], es => {
                    return es.filter(e => e.get('id') !== event.get('id'));
                });

            return place;
        })
    });

    return state.updateIn(['currentLocation', 'items'], items => {
        return items.push(item);
    });
}

function destroyItem(state, item) {
    return state.update('inventory', items => {
        return items.filter(i => i.get('id') !== item.get('id'));
    });
}

function addConversation(state, character, conversation) {
    return state.updateIn(['currentLocation', 'characters'], chars => {
        return chars.map(char => {
            if(char.get('id') === character) {
                char = char.update('conversations', cs => {
                    return cs.push(conversation);
                });
            }

            return char;
        });
    });
}

function deleteConversation(state, character, conversation) {
    return state.updateIn(['currentLocation', 'characters'], chars => {
        return chars.map(char => {
            if(char.get('id') === character) {
                char = char.update('conversations', cs => cs.filter(c => {
                    return c.get('id') !== conversation.get('id');
                }));
            }

            return char;
        });
    });
}

function printStory(state, story) {
    state = sendMessage(state, story.first());

    if(story.size > 1)
        state = state.set('currentConversation', story.shift());

    return state;
}

function updateMessage(state, event) {
    let messagePosition;
    if(event.get('targetType') === 'place')
        messagePosition = ['currentLocation', 'places'];

    return state.updateIn(messagePosition, is => {
        return is.map(i => {
            if(i.get('id') === event.get('target'))
                i = i.setIn([event.get('messageType'), 'message'], event.get('targetMessage'));

            return i;
        })
    })
}

function addLocation(state, location) {
    return state.updateIn(['currentLocation', 'canTravelTo'], l => {
        return l.push(location);
    });
}

function manageEvents(state, events) {
    if(events && events.size) {
        events.forEach(event => {
            const type = event.get('type');
            if(event.has('message'))
                state = sendMessage(state, event.get('message'));

            if(type === 'spawnItem')
                state = spawnItem(state, event);
            else if(type === 'destroyItem')
                state = destroyItem(state, event.get('item'));
            else if(type === 'addConversation')
                state = addConversation(state, event.get('character'), event.get('conversation'));
            else if(type === 'deleteConversation')
                state = deleteConversation(state, event.get('character'), event.get('conversation'));
            else if(type === 'printStory')
                state = printStory(state, event.get('story'));
            else if(type === 'updateMessage')
                state = updateMessage(state, event);
            else if(type === 'addLocation')
                state = addLocation(state, event.get('location'));
        });
    }

    return state;
}

// Reducer

export default function(state = defaultState, action) {
    switch (action.type) {
        case INIT_LOCATIONS:
            return state.set('locations', action.locations);
        case CHANGE_LOCATION:
            let location = state.get('locations').find(l => {
                return l.get('id') === action.location.get('id')
            });
            state = state.update('locations', locations => {
                return locations.map(l => {
                    if(l.get('id') === state.get('currentLocation').get('id'))
                        return state.get('currentLocation');
                    else
                        return l;
                });
            });
            state = manageEvents(state, location.getIn(['onEnter', 'events']))

            if(location.get('onEnter').has('message'))
                state = sendMessage(state, location.getIn(['onEnter', 'message']));

            return state.set('currentLocation', location);
        case PICKUP_ITEM:
            state = state.updateIn(['currentLocation', 'items'], items => {
                return items.filter(i => i.get('id') !== action.item.get('id'))
            });
            if(action.item.get('onPickup'))
                state = sendMessage(state, action.item.get('onPickup'));

            return state.update('inventory', i => i.push(action.item));
        case INVESTIGATE:
            if(action.place.get('onInvestigate').has('events'))
                state = manageEvents(state, action.place.getIn(['onInvestigate', 'events']));

            return sendMessage(state, action.place.getIn(['onInvestigate', 'message']));
        case INTERACT:
            let message = "That's not on fire!";
            const interactable = action.interactable;

            if(interactable.has('onInteraction')) {
                const interaction = interactable.get('onInteraction').find(i => {
                    return i.get('item') === action.item.get('id');
                });

                if(interaction) {
                    message = interaction.get('message');
                    state = sendMessage(state, message);
                    state = manageEvents(state, interaction.get('events'));
                }
            } else {
                state = sendMessage(state, message);
            }

            return state;
        case TALK:
            const conversation = action.conversation;

            state = sendMessage(state, conversation.get('messages').first());

            if(conversation.get('messages').size > 1)
                state = state.set('currentConversation', conversation.get('messages').shift());

            if(conversation.has('events'))
                state = manageEvents(state, conversation.get('events'));

            return state;
        case PUSH_CONVERSATION:
            state = sendMessage(state, state.get('currentConversation').first());

            return state.update('currentConversation', c => c.shift());
        case ADD_MESSAGE:
            return sendMessage(state, action.text);
        default:
            return state;
    }
}
