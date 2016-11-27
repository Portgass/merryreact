import { combineReducers } from 'redux-immutable';
import game from './modules/game';
import display from './modules/display';

export default combineReducers({
    game,
    display
});
