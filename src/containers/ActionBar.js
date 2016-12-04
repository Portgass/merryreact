import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    changeLocation,
    pickupItem,
    investigate
} from '../redux/modules/game.js';
import './ActionBar.css';

import { Card, CardActions } from 'material-ui/Card';
import TravelAction from '../components/TravelAction.js';
import PickupAction from '../components/PickupAction.js';
import InvestigateAction from '../components/InvestigateAction.js';


class ActionBar extends Component {
    static propTypes = {
        changeLocation: PropTypes.func.isRequired
    };

    render() {
        const { props: {
            canTravelTo,
            changeLocation,
            items,
            pickupItem,
            places,
            investigate
        } } = this;

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

        let investigateAction = null;
        if(places)
            investigateAction = (
                <InvestigateAction  places={places}
                                    investigate={investigate}/>
            )

        return (
            <Card className="ActionBar">
                <CardActions className="ActionBarActions">
                    {travelAction}
                    {pickupAction}
                    {investigateAction}
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        canTravelTo: state.getIn(['currentLocation', 'canTravelTo']),
        items: state.getIn(['currentLocation', 'items']),
        places: state.getIn(['currentLocation', 'places'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeLocation,
        pickupItem,
        investigate
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);
