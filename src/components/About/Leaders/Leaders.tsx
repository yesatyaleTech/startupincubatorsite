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
                <p className="name">
                    {this.props.name}
                    <br/>
                    <span className="role">
                    {this.props.role}
                    </span>
                </p>
                <hr className="divider">
                </hr>
                
                <p className="bio">
                    {this.props.bio}
                </p>
                    
            </div>
        );
    }
}