import React, { Component, PropTypes } from 'react';

import { List } from 'immutable';

import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Action extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(List).isRequired,
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
        const { props: { name, icon, children } } = this;

        return (
            <span>
                <FlatButton
                    label={name}
                    icon={icon}
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
                                    onTouchTap={() => this.handleAction(item)}
                                />
                            )
                        })}
                    </Menu>
                </Popover>
            </span>
        );
    }
}

export default Action;
