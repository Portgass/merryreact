import React, { Component, PropTypes } from 'react';

import { List } from 'immutable';

import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class Interaction extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(List).isRequired,
        interactables: PropTypes.instanceOf(List).isRequired,
        name: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired
    };

    state = {
        open: false
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleAction = (item) => {
        this.props.action(item);
        this.setState({ open: false });
    }

    render() {
        const { props: { name, children, interactables } } = this;

        return (
            <span>
                <FlatButton
                    label={name}
                    onTouchTap={this.handleTouchTap}
                />
                <Popover
                      open={this.state.open}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                      onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        {children.map(item => {
                            return (
                                <MenuItem
                                    key={item.get('id')}
                                    primaryText={item.get('name')}
                                    rightIcon={<ArrowDropRight />}
                                    menuItems={interactables.map(i => {
                                        return (
                                            <MenuItem
                                                key={i.get('id')}
                                                primaryText={i.get('name')}
                                                onTouchTap={() => this.handleAction(i)} />
                                        )
                                    })}
                                />
                            )
                        })}
                    </Menu>
                </Popover>
            </span>
        );
    }
}

export default Interaction;
