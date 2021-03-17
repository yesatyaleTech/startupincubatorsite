import React from 'react';
import LeaderProps from '../../../models/LeaderProps';
import './Leaders.css';

export default class Leaders extends React.Component<LeaderProps>{

    render() {
        return (
            <div className="leader-info">
                <circle className="headshot-circle">
                    <img alt="headshot" className="headshot" src={this.props.headshotURL} />
                </circle>
                <p className="bio">
                    {this.props.bio}
                </p>
            </div>
        );
    }
}