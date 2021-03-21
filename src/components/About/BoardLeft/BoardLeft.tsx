import React from 'react';
import BoardProps from '../../../models/BoardProps';
import './BoardLeft.css';

export default class BoardLeft extends React.Component<BoardProps>{

    render() {
        return (
            <div className="board-left-info">
                <circle className="board-left-headshot-circle">
                    <img alt="headshot" className="board-left-headshot" src={this.props.headshotURL} />
                </circle>
                <span className="left-bio">
                    {this.props.bio}
                </span>
            </div>
        );
    }
}