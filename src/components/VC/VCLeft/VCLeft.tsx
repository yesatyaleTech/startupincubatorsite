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
                    <span className="name">
                        {this.props.name}
                    </span>
                    <hr className="divider">
                    </hr>
                    {this.props.bio}
                    <br />
                    <a target="_blank" href={`${this.props.linkedin}`}>
                        <button className="linkedin-btn">
                            Connect
                        </button>
                    </a>
                </span>

            </div>
        );
    }
}