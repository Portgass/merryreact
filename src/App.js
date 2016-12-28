import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setStart } from './redux/modules/game.js';

import './App.css';

import RaisedButton from 'material-ui/RaisedButton';

import Display from './containers/Display.js';
import Inventory from './containers/Inventory.js';
import ActionBar from './containers/ActionBar.js';
import DevTools from './components/DevTools.js';

class App extends Component {
    render() {
        const { props: { start, setStart, finish } } = this;

        return (
            <div>
            {finish ?
                <div className="Container">
                    <span className="Text">To be continued...</span>
                </div>
            :
                <div>
                    {start ?
                        <div>
                            <Display />
                            <Inventory />
                            <ActionBar />
                            <DevTools />
                        </div>
                    :
                        <div className="Container">
                            <span className="Text">Merry Christmas</span>
                            <RaisedButton
                                label="Start your adventure"
                                primary={true}
                                className="Button"
                                onTouchTap={setStart}
                            />
                        </div>
                    }
                </div>
            }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        start: state.get('start'),
        finish: state.get('finish')
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setStart
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
