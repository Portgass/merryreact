import React, { Component, PropTypes } from 'react';
import Typist from 'react-typist';

import './Message.css';

class Message extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired
    };

    getOpacity = (position) => {
        if(position === 2)
            return 'light-fade';
        else if(position === 3)
            return 'heavy-fade';
    }

    render() {
        const { props: { message, position } } = this
        return (
            <Typist avgTypingDelay={10}
                    stdTypingDelay={0}
                    cursor={{   hideWhenDone: true,
                            hideWhenDoneDelay: 500 }}
            >
                <div    className={this.getOpacity(position)}
                        key={position}>
                    {message.split('\n').map((line, index) => {
                        return (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        )
                    })}
                </div>
            </Typist>
        );
    }
}

export default Message;
