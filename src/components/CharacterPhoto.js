import React, { Component } from 'react';

import { Card, CardMedia } from 'material-ui/Card';

import './CharacterPhoto.css';


class CharacterPhoto extends Component {
    render() {
        const { props: { character } } = this
        return (
            <Card className="CharacterPhoto">
                <CardMedia>
                    <img alt={character} src={require('./Untitled.png')} />
                </CardMedia>
            </Card>
        );
    }
}

export default CharacterPhoto;
