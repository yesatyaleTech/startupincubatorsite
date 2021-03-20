import React from 'react';
import './About.css'
import Leaders from './Leaders/Leaders';
import clark from '../../images/clarkk.jpeg';
import johnathan from '../../images/johnathanp.jpg';
import emma from '../../images/emmar.jpeg';

export default class About extends React.Component<{}>{

    render() {
        return (
            <div className="about">
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
                <h3>
                    Our Team
                </h3>
                <span className="leaders">
                    <Leaders
                    headshotURL={emma}
                    bio="Emma is a senior in Pierson College on the women’s lacrosse team and is currently taking a gap year."
                    />
                    <Leaders
                    headshotURL={johnathan}
                    bio="Jonathan is a first-year in Saybrook from Boston, MA, studying economics and math. "
                    />
                    <Leaders
                    headshotURL={clark}
                    bio="Clark is a sophomore Trumbullian playing on the Varsity Baseball team currently on a gap semester to work on StatStak."
                    />
                </span>
            </div>
        );
    }
}