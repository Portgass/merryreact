import {
    FETCH_LOCATION,
    setLocation
} from '../modules/game.js';

import {
    addMessage
} from '../modules/display.js';

export default store => next => action => {
    if(action.meta && action.meta.fetch){
        switch (action.type) {
            case FETCH_LOCATION:
                const state = store.getState();
                const index = state.getIn(['game', 'locations']).findIndex( l => {
                    return l.get('id') === action.id;
                });
                const location = state.getIn(['game', 'locations', index]);
                store.dispatch(setLocation(location));
                store.dispatch(addMessage(location.get('introduction')));
                break;
            default:
        }
    }
    return next(action);
}
