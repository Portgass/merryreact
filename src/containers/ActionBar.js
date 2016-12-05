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
import Action from '../components/Action.js';


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
                <Action name="Travel"
                        children={canTravelTo}
                        action={changeLocation}/>
            )

        let pickupAction = null;
        if(items && items.size)
            pickupAction = (
                <Action name="Pickup"
                        children={items}
                        action={pickupItem}/>
            )

        let investigateAction = null;
        if(places)
            investigateAction = (
                <Action name="Investigate"
                        children={places}
                        action={investigate}/>
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
        canTravelTo: state.getIn(['currentLocation', 'canTravelTo']).map(location => {
            return state.get('locations').find(l => {
                return l.get('id') === location;
            });
        }),
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
