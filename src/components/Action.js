import React, { Component, PropTypes } from 'react';

import { List } from 'immutable';

import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Room from 'material-ui/svg-icons/action/room';
import Face from 'material-ui/svg-icons/action/face';
import Build from 'material-ui/svg-icons/action/build';

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
    };

    getIcon = type => {
        switch (type) {
            case 'p':
                return <Room />;
            case 'c':
                return <Face />;
            case 'i':
                return <Build />;
            default:
                return null;
        }
    };

    render() {
        const { props: { name, icon, children, disabled } } = this;

        return (
            <span>
                <FlatButton
                    label={name}
                    icon={icon}
                    onTouchTap={this.handleTouchTap}
                    disabled={disabled}
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
                                    leftIcon={this.getIcon(item.get('id').charAt(0))}
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
