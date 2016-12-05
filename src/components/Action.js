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

    handleSelectLocation = (child) => {
        this.props.action(child);
        this.setState({ open: false });
    }

    render() {
        const { props: { name, children } } = this;

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
                        {children.map(child => {
                            return (
                                <MenuItem
                                    key={child.get('id')}
                                    primaryText={child.get('name')}
                                    onTouchTap={() => this.handleAction(child)}
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
