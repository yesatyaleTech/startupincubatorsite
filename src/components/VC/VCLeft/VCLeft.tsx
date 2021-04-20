import React from 'react';
import BoardProps from '../../../models/BoardProps';
import './VCLeft.css';

export default class VCLeft extends React.Component<BoardProps>{

    render() {
        return (
            <div className="vc-left-info">
                <circle className="vc-left-headshot-circle">
                    <img alt="headshot" className="board-left-headshot" src={this.props.headshotURL} />
                </circle>
                <span className="left-bio">
                    {this.props.bio}
                </span>
            </div>
        );
    }
}