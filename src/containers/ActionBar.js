import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    addMessage
} from '../redux/modules/display.js';
import {
    fetchLocation,
    changeLocation,
    pickupItem
} from '../redux/modules/game.js';
import './ActionBar.css';

import { Card, CardActions } from 'material-ui/Card';
import TravelAction from '../components/TravelAction.js';
import PickupAction from '../components/PickupAction.js';


class ActionBar extends Component {
    static propTypes = {
        addMessage: PropTypes.func.isRequired
    };

    render() {
        const { props: { canTravelTo, changeLocation, items, pickupItem } } = this;

        let travelAction = null;
        if(canTravelTo)
            travelAction = (
                <TravelAction locations={canTravelTo}
                              changeLocation={changeLocation}/>
            )

        let pickupAction = null;
        if(items && items.size)
            pickupAction = (
                <PickupAction items={items}
                              pickupItem={pickupItem}/>
            )

        return (
            <Card className="ActionBar">
                <CardActions className="ActionBarActions">
                    {travelAction}
                    {pickupAction}
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        canTravelTo: state.get('game').get('currentLocation').get('canTravelTo'),
        items: state.get('game').get('currentLocation').get('items')
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage,
        fetchLocation,
        changeLocation,
        pickupItem
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);
