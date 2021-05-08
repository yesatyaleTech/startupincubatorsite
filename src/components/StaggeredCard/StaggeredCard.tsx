import React from 'react';
import './StaggeredCard.css';

type StaggeredCardProps = {
    name: string, 
    bio: string, 
    headshotURL: string, 
    linkedin: string, 
    side: string
}


const StaggeredCard = ({ name, bio, headshotURL, linkedin, side }: StaggeredCardProps) => {
    return (
        <div className={`staggeredcard-${side}-info`}>
            <span className={`${side}-bio`}>
                <span className="name">
                    {name}
                </span>
                <hr className="divider">
                </hr>
                {bio}
                <br />
                <a target="_blank" href={`${linkedin}`}>
                    <button className="linkedin-btn">
                        Connect
                    </button>
                </a>
            </span>
            <circle className={`board-${side}-headshot-circle`}>
                <img alt="headshot" className={`staggeredcard-${side}-headshot`} src={headshotURL} />
            </circle>
        </div>
    );

}
export default StaggeredCard;