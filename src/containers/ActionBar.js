import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from 'immutable';

import {
    changeLocation,
    pickupItem,
    investigate,
    interact
} from '../redux/modules/game.js';
import './ActionBar.css';

import { Card, CardActions } from 'material-ui/Card';
import Explore from 'material-ui/svg-icons/action/explore';
import Visibility from 'material-ui/svg-icons/action/visibility';
import Extension from 'material-ui/svg-icons/action/extension';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Message from 'material-ui/svg-icons/communication/message';

import Action from '../components/Action.js';
import Interaction from '../components/Interaction.js';


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
            investigate,
            inventory,
            interact,
            characters
        } } = this;

        let travelAction = null;
        if(canTravelTo)
            travelAction = (
                <Action name="Travel"
                        icon={<Explore />}
                        children={canTravelTo}
                        action={changeLocation} />
            )

        let pickupAction = null;
        if(items && items.size)
            pickupAction = (
                <Action name="Pickup"
                        icon={<AddCircle />}
                        children={items}
                        action={pickupItem} />
            )

        let investigateAction = null;
        if(places || characters) {
            let interactables = List([]);
            if(places)
                interactables = interactables.push(places);
            if(characters)
                interactables = interactables.push(characters);
            interactables = interactables.flatten(true);
            investigateAction = (
                <Action name="Investigate"
                        icon={<Visibility />}
                        children={interactables}
                        action={investigate} />
            )
        }

        let useAction = null;
        if(inventory && inventory.size) {
            let interactables = List([]);
            if(items)
                interactables = interactables.push(items);
            if(places)
                interactables = interactables.push(places);
            interactables = interactables.flatten(true);
            useAction = (
                <Interaction    name="Use"
                                icon={<Extension />}
                                children={inventory}
                                interactables={interactables}
                                action={interact} />
            )
        }

        let talkAction = null;
        if(characters) {
            useAction = (
                <Action name="Talk"
                        icon={<Message />}
                        children={characters}
                        action={interact} />
            )
        }

        return (
            <Card className="ActionBar">
                <CardActions className="ActionBarActions">
                    {travelAction}
                    {pickupAction}
                    {investigateAction}
                    {useAction}
                    {talkAction}
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
        places: state.getIn(['currentLocation', 'places']),
        characters: state.getIn(['currentLocation', 'characters']),
        inventory: state.get('inventory')
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeLocation,
        pickupItem,
        investigate,
        interact
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);
