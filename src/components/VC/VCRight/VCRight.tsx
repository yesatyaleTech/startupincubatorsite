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
                    <br/>
                    <a target="_blank" href={`${this.props.linkedin}`}>
                            <button className="linkedin-btn">
                                Connect
                        </button>
                        </a>
                </span>
                <circle className="vc-right-headshot-circle">
                    <img alt="headshot" className="board-right-headshot" src={this.props.headshotURL} />
                </circle>
            </div>
        );
    }
}