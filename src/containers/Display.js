import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { Card, CardText } from 'material-ui/Card';

import './Display.css';
import Message from '../components/Message';
//import CharacterPhoto from '../components/CharacterPhoto';

class Display extends Component {
    static propTypes = {
        messages: PropTypes.instanceOf(List).isRequired
    };

    static defaultProps = {
        messages: List(['Uninitialized message']),
        delay: 10000
    };

    render() {
        return (
            <Card className="Card">
                <CardText className="CardText">
                    {this.props.messages.map( (message, index) => {
                        let length = this.props.messages.size;
                        if(index > length - 6){
                            return (
                                <Message    key={index}
                                            message={message}
                                            position={length - index} />
                            )
                        }
                        return null
                    })}
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.get('messages'),
        currentConversation: state.get('currentConversation')
    };
};

export default connect(
    mapStateToProps
)(Display);
