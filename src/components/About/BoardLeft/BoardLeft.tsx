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
                    <span className="name">
                        {this.props.name}

                    </span>
                    <hr className="divider">
                    </hr>

                    {this.props.bio}
                    <br />
                    <a href={`${this.props.linkedin}`}>
                        <button className="linkedin-btn">
                            Connect
                        </button>
                    </a>
                </span>
            </div>
        );
    }
}