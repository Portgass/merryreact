import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    addMessage,
    setDelay
} from '../redux/modules/display.js';
import {
    fetchLocation
} from '../redux/modules/game.js';
import './ActionBar.css';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

class ActionBar extends Component {
    static propTypes = {
        addMessage: PropTypes.func.isRequired,
        setDelay: PropTypes.func.isRequired
    };

    render() {
        return (
            <Toolbar className="Toolbar">
                <ToolbarGroup firstChild={true}>
                    <FlatButton
                        label="Add"
                        onTouchTap={() => this.props.addMessage("hi")}
                    />
                    <FlatButton
                        label="First Room"
                        onTouchTap={() => this.props.fetchLocation("firstRoom")}
                    />
                    <FlatButton
                        label="Delay"
                        onTouchTap={this.props.setDelay}
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage,
        fetchLocation,
        setDelay
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);
