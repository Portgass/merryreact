import {
    FETCH_LOCATION,
    CHANGE_LOCATION,
    setLocation
} from '../modules/game.js';

import {
    addMessage
} from '../modules/display.js';

function getLocation(state, id) {
    const index = state.getIn(['game', 'locations']).findIndex( l => {
        return l.get('id') === id;
    });
    return state.getIn(['game', 'locations', index]);
}

export default store => next => action => {
    if(action.meta && action.meta.fetch){
        const location = getLocation(store.getState(), action.id);
        switch (action.type) {
            // TODO Update location in locations, set new location,
            // think about when to send messages
            case CHANGE_LOCATION:
                store.dispatch(setLocation(location));
                store.dispatch(addMessage(location.get('introduction')));
                break;
            case FETCH_LOCATION:
                store.dispatch(setLocation(location));
                store.dispatch(addMessage(location.get('introduction')));
                break;
            default:
        }
    }
    return next(action);
}
