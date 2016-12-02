import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    addMessage,
    setDelay
} from '../redux/modules/display.js';
import {
    fetchLocation,
    changeLocation
} from '../redux/modules/game.js';
import './ActionBar.css';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import TravelAction from '../components/TravelAction.js';


class ActionBar extends Component {
    static propTypes = {
        addMessage: PropTypes.func.isRequired,
        setDelay: PropTypes.func.isRequired
    };

    render() {
        const { props: { canTravelTo, changeLocation } } = this;

        let travelAction = null;
        if(this.props.canTravelTo)
            travelAction = (
                <TravelAction locations={canTravelTo}
                              changeLocation={changeLocation}/>
            )

        return (
            <Toolbar className="Toolbar">
                <ToolbarGroup firstChild={true}>
                    {travelAction}
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        canTravelTo: state.get('game').get('currentLocation').get('canTravelTo')
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage,
        fetchLocation,
        changeLocation,
        setDelay
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);
