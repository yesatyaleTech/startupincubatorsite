import React from 'react';
import BoardProps from '../../../models/BoardProps';
import './BoardRight.css';

export default class BoardRight extends React.Component<BoardProps>{

    render() {
        return (
            <div className="board-right-info">
                <span className="right-bio">
                    {this.props.bio}
                </span>
                <circle className="board-right-headshot-circle">
                    <img alt="headshot" className="board-right-headshot" src={this.props.headshotURL} />
                </circle>
            </div>
        );
    }
}