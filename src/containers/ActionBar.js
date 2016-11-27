import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setText, setDelay } from '../redux/modules/display.js';

class ActionBar extends Component {
    static propTypes = {
        setText: PropTypes.func.isRequired,
        setDelay: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <button onClick={() => this.props.setText("hi")}>
                    Here
                </button>
                <button onClick={this.props.setDelay}>
                    Here
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setText,
        setDelay
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);
