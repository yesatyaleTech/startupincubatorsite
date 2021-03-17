import React from 'react';
import './About.css'
import Leaders from './Leaders/Leaders';
export default class About extends React.Component<{}>{

    render() {
        return (
            <div>
                <h3>
                    ¿ What we do ?
                </h3>
                <p className="ww-do">
                    We’re unifying the Yale entrepreneurial ecosystem and providing yalies with everything they need to start and scale their ventures.
                </p>
                <div className="directory">
                    <span className="for-founders">
                        Are you a founder?
                        <hr />
                        <a href="">
                            <button className="directory-btn">
                                Connect with founders!
                            </button>
                        </a>
                    </span>
                    <span className="for-alum">
                        Are you an Alum looking to connect with founders?
                        <hr />
                        <a href="">
                            <button className="directory-btn">
                                Join our incubator!
                            </button>
                        </a>
                    </span>
                </div>
                <span className="leaders">
                    <Leaders
                    headshotURL="https://goduke.com/images/2019/9/18/Klitenic_Clark.jpg"
                    bio="Clark is a sophomore Trumbullian and a member of the Yale Baseball team. He’s taking a gap year to lead the incubator and work on StatStak"
                    />
                    <Leaders
                    headshotURL="https://goduke.com/images/2019/9/18/Klitenic_Clark.jpg"
                    bio="Clark is a sophomore Trumbullian and a member of the Yale Baseball team. He’s taking a gap year to lead the incubator and work on StatStak"
                    />
                    <Leaders
                    headshotURL="https://goduke.com/images/2019/9/18/Klitenic_Clark.jpg"
                    bio="Clark is a sophomore Trumbullian and a member of the Yale Baseball team. He’s taking a gap year to lead the incubator and work on StatStak"
                    />
                </span>
            </div>
        );
    }
}