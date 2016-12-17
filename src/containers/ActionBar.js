import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from 'immutable';

import {
    changeLocation,
    pickupItem,
    investigate,
    interact,
    talk,
    pushConversation
} from '../redux/modules/game.js';
import './ActionBar.css';

import { Card, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
            characters,
            talk,
            currentConversation,
            pushConversation
        } } = this;

        let showingStory = false;
        if(currentConversation && currentConversation.size > 0)
            showingStory = true;

        let travelAction = null;
        if(canTravelTo && canTravelTo.size)
            travelAction = (
                <Action name="Travel"
                        icon={<Explore />}
                        children={canTravelTo}
                        action={changeLocation}
                        disabled={showingStory} />
            )

        let pickupAction = null;
        if(items && items.size)
            pickupAction = (
                <Action name="Pickup"
                        icon={<AddCircle />}
                        children={items}
                        action={pickupItem}
                        disabled={showingStory} />
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
                        action={investigate}
                        disabled={showingStory} />
            )
        }

        let useAction = null;
        if(inventory && inventory.size) {
            let interactables = List([]);
            if(inventory)
                interactables = interactables.push(inventory);
            if(places)
                interactables = interactables.push(places);
            interactables = interactables.flatten(true);
            useAction = (
                <Interaction    name="Use"
                                icon={<Extension />}
                                children={inventory}
                                interactables={interactables}
                                action={interact}
                                disabled={showingStory} />
            )
        }

        let talkAction = null;
        if(characters) {
            let activeCharacters = characters.filter(char => {
                return char.get('conversations').size;
            });
            if(activeCharacters.size) {
                talkAction = (
                    <Interaction    name="Talk"
                                    icon={<Message />}
                                    children={activeCharacters}
                                    talk={true}
                                    action={talk}
                                    disabled={showingStory} />
                )
            } else {
                talkAction = null;
            }
        }

        let continueConversation = null;
        if(currentConversation.size) {
            continueConversation = (
                <RaisedButton   label="Continue"
                                primary={true}
                                className="Continue"
                                onTouchTap={pushConversation} />
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
                    {continueConversation}
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    let canTravelTo;
    if(state.get('currentLocation').has('canTravelTo')) {
        canTravelTo = state.getIn(['currentLocation', 'canTravelTo']).map(location => {
            return state.get('locations').find(l => {
                return l.get('id') === location;
            });
        });
    }
    return {
        canTravelTo: canTravelTo,
        items: state.getIn(['currentLocation', 'items']),
        places: state.getIn(['currentLocation', 'places']),
        characters: state.getIn(['currentLocation', 'characters']),
        inventory: state.get('inventory'),
        currentConversation: state.get('currentConversation')
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeLocation,
        pickupItem,
        investigate,
        interact,
        talk,
        pushConversation
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);
