import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import Typist from 'react-typist';
import { Card, CardText } from 'material-ui/Card';

import './Display.css';

class Display extends Component {
    static propTypes = {
        messages: PropTypes.instanceOf(List).isRequired,
        delay: PropTypes.number.isRequired
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
                        if(index > this.props.messages.size - 6){
                            let arr = [];
                            let lines = message.split('\n');
                            lines.forEach(line => {
                                arr.push(line);
                                arr.push(<br />);
                            })
                            return (
                                <Typist
                                    key={index}
                                    avgTypingDelay={10}
                                    stdTypingDelay={0}
                                    cursor={{ hideWhenDone: true,
                                            hideWhenDoneDelay: 500 }}
                                >
                                    {arr}
                                </Typist>
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
        messages: state.get('display').get('messages'),
        delay: state.get('display').get('delay')
    };
};

export default connect(
    mapStateToProps
)(Display);
