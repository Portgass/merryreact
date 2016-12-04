import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import Chip from 'material-ui/Chip';

import './Inventory.css';

class Inventory extends Component {
    static propTypes = {
        inventory: PropTypes.instanceOf(List).isRequired
    };

    render() {
        const { props: { inventory } } = this;

        return (
            <div className="Inventory">
                {inventory.map(item => {
                    return (
                        <Chip key={item.get('id')} className="InventoryItem">
                            {item.get('name')}
                        </Chip>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inventory: state.get('inventory')
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inventory);
