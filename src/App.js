import React, { Component } from 'react';
import './App.css';

import Display from './containers/Display.js';
import Inventory from './containers/Inventory.js';
import ActionBar from './containers/ActionBar.js';
import DevTools from './components/DevTools.js';

class App extends Component {
  render() {
    return (
      <div>
        <Display />
        <Inventory />
        <ActionBar />
        <DevTools />
      </div>
    );
  }
}

export default App;
