import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class PickupAction extends Component {
    static propTypes = {
        locations: PropTypes.instanceOf(List)
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

    handleSelectItem = (item) => {
        this.props.pickupItem(item);
        this.setState({ open: false });
    }

    render() {
        const { props: { items } } = this;

        return (
            <span>
                <FlatButton
                    label="Pickup"
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
                        {items.map(item => {
                            return (
                                <MenuItem
                                    key={item.get('id')}
                                    primaryText={item.get('name')}
                                    onTouchTap={() => this.handleSelectItem(item)}
                                />
                            )
                        })}
                    </Menu>
                </Popover>
            </span>
        );
    }
}

export default PickupAction;
