import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducer from './redux/reducer';
import fetch from './redux/middleware/fetch.js';
import App from './App';
import DevTools from './components/DevTools';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { fromJS } from 'immutable';
import locations from './data/locations.js';
import { initLocations, fetchLocation } from './redux/modules/game.js';

const initialState = Map({});

const enhancer = compose(
    applyMiddleware(fetch),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

let store = createStore(reducer, initialState, enhancer);

store.dispatch(initLocations(fromJS(locations)));

store.dispatch(fetchLocation('firstRoom'));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
