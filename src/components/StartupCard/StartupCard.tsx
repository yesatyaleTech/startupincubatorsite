import React from 'react';
import './StartupCard.css';

type StartupCardProps = {
    name: string,
    writeup: string,
    founder: string,
    websiteLink: string,
    contact: string,
    logo: string,
}

const StartupCard = ({ name, writeup, founder, websiteLink, contact, logo }: StartupCardProps) => {

    return (
        <div className="startup-card-container">
            <span className="header" >
                <p>{founder}</p>
                <img className="startup-logo" alt="logo" src={logo} />

            </span>
            <span className="footer">
                <p>{name}</p>
                <p className="startup-writeup">{writeup}</p>
                <div className="button-container">
                    <a target="_blank" href={websiteLink}>
                        <button className="startup-card-btn">
                            Visit Site
                        </button>
                    </a>
                    <a href={`mailto:${contact}`}>
                        <button className="startup-card-btn">
                            Connect
                        </button>
                    </a>
                </div>
            </span>
        </div >
    )
}

export default StartupCard;