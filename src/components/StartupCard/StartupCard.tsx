import React from 'react';
import StartUpCardProps from '../../models/StartUpCardProps';
import './StartupCard.css';

export default class StartUpCard extends React.Component<StartUpCardProps>{


    render() {
        return (
            <div className="startup-card-container">
                <span className="header" >
                    <p>{this.props.founder}</p>
                        <img className="startup-logo" alt="logo" src={this.props.logo} />

                </span>
                <span className="footer">
                    <p>{this.props.name}</p>
                    <p className="startup-writeup">{this.props.writeup}</p>
                    <div className="button-container">
                        <a href={this.props.websiteLink}>
                            <button className="startup-card-btn">
                                Visit Site
                        </button>
                        </a>
                        <a href={`mailto:${this.props.contact}`}>
                            <button className="startup-card-btn">
                                Connect
                        </button>
                        </a>
                    </div>
                </span>
            </div >
        )
    }
}