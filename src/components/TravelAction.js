import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class TravelAction extends Component {
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

    render() {
        return (
            <span>
                <FlatButton
                    label="Travel"
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
                        {this.props.locations.map((location, index) => {
                            return (
                                <MenuItem
                                    key={location}
                                    primaryText={location}
                                />
                            )
                        })}
                    </Menu>
                </Popover>
            </span>
        );
    }
}

export default TravelAction;
