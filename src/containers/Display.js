import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typist from 'react-typist';

class Display extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        text: 'Uninitialized text',
        delay: 10000
    };

    render() {
        return (
            <div>
                <Typist startDelay={ this.props.delay }>
                    Hello I am here { this.props.text }
                </Typist>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.get('display').get('text'),
        delay: state.get('display').get('delay')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Display);
