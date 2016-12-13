import React, { Component, PropTypes } from 'react';
import Typist from 'react-typist';

import './Message.css';

class Message extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired
    };

    getStyle = (position) => {
        if(position === 1)
            return 'first';
        else if(position === 2)
            return 'fade-1';
        else if(position === 3)
            return 'fade-2';
        else if(position === 4)
            return 'fade-3';
        else if(position === 5)
            return 'fade-4';
    }

    render() {
        const { props: { message, position } } = this
        return (
            <div className={this.getStyle(position)}>
                <Typist avgTypingDelay={10}
                        stdTypingDelay={0}
                        cursor={{   hideWhenDone: true,
                                    hideWhenDoneDelay: 500 }}
                >
                    {message.split('\n').map((line, index) => {
                        return (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        )
                    })}
                </Typist>
            </div>
        );
    }
}

export default Message;
