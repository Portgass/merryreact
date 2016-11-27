import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Map } from 'immutable';
import reducer from './redux/reducer';
import App from './App';
import DevTools from './components/DevTools';
import './index.css';

const initialState = Map({});

const enhancer = compose(
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

let store = createStore(reducer, initialState, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
