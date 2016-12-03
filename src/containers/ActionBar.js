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

import { Card, CardActions } from 'material-ui/Card';
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
            <Card className="ActionBar">
                <CardActions>
                    {travelAction}
                </CardActions>
            </Card>
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
