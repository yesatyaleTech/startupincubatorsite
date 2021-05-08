import React from 'react';
import './Leaders.css';

type LeadersProps = {
    headshotURL: string,
    name: string,
    bio: string,
    linkedin:string,
    role?: string,
}

const Leaders = ({headshotURL, name, bio, linkedin, role,}: LeadersProps) => {
    return (
        <div className="leader-info">
            <circle className="headshot-circle">
                <img alt="headshot" className="headshot" src={headshotURL} />
            </circle>

            <p className="name">
                <a target="_blank" href={linkedin}>
                    {name}
                </a>
                <br />
                <span className="role">
                    {role}
                </span>
            </p>
            <hr className="divider">
            </hr>

            <p className="bio">
                {bio}
            </p>

        </div>
    );
}

export default Leaders;