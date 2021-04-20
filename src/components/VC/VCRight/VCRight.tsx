import React from 'react';
import BoardProps from '../../../models/BoardProps';
import './VCRight.css';

export default class VCRight extends React.Component<BoardProps>{

    render() {
        return (
            <div className="vc-right-info">
                <span className="right-bio">
                <span className="name">
                    {this.props.name}
                </span>
                <hr className="divider">
                </hr>
                    {this.props.bio}
                </span>
                <circle className="vc-right-headshot-circle">
                    <img alt="headshot" className="board-right-headshot" src={this.props.headshotURL} />
                </circle>
            </div>
        );
    }
}