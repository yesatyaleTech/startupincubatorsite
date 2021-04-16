import React from 'react';
import '../../index.css';
import './About.css'
import Leaders from './Leaders/Leaders';
import clark from '../../images/clarkk.jpeg';
import johnathan from '../../images/johnathanp.jpg';
import emma from '../../images/emmar.jpeg';
import BoardLeft from './BoardLeft/BoardLeft';
import BoardRight from './BoardRight/BoardRight';
import vicki from '../../images/vicki.jpeg';
import lisbeth from '../../images/lisbeth.jpeg';
import philip from '../../images/philip.jpeg';
import sam from '../../images/sam.jpeg';
import leslie from '../../images/leslie.jpeg';
import kofi from '../../images/kofi.jpeg';
import IncubatorImage from '../../images/WhatWeDo.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends React.Component<{}>{

    render() {
        return (
            <div className="about">
                <h2 id="ww-do-title">
                    <span id="upsideDownQMark">?</span>
                    &nbsp; What we do ?
                </h2>
                <img src={IncubatorImage} className="incubator-image" />
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
                <h2>
                    Our Team
                </h2>
                <span className="leaders">
                    <Leaders
                    headshotURL={emma}
                    bio="Emma is a senior in Pierson College on the women’s lacrosse team and is currently taking a gap year. VC Team Lead"
                    />
                    <Leaders
                    headshotURL={clark}
                    bio="Clark is a sophomore Trumbullian playing on the Varsity Baseball team currently on a gap semester to work on StatStak. Incubator Lead"
                    />
                    <Leaders
                    headshotURL={johnathan}
                    bio="Jonathan is a first-year in Saybrook from Boston, MA, studying economics and math. Pod Experience Lead"
                    />
                </span>
                <h2>
                    Meet Our Board
                </h2>
                <span className="board">
                    <BoardLeft
                    headshotURL={vicki}
                    bio="Vicki Politis is the Managing Director of Golden Seeds, a fund that invests in women-led ventures across the nation."
                    />
                    <BoardRight
                    headshotURL={lisbeth}
                    bio="Lisbeth Kaufman is the founder of KitSplit and is leading startup mentorship/ development at AWS."
                    />
                    <BoardLeft
                    headshotURL={philip}
                    bio="Philip Stanger is the Founder and CEO of Olyns and the Entrepreneur in Residence at Vanedge Capital."
                    />
                    <BoardRight
                    headshotURL={sam}
                    bio="Sam Hendel is the President at Easterly Investment Partners, the Co-Founder of Dataminr, and the co-founder of Accelerate Yale & Yale Angels."
                    />
                    <BoardLeft
                    headshotURL={leslie}
                    bio="Leslie Goldman is an investor at Blue Ivy Ventures and Co-Founder and general partner at the Artemis Fund which invests in pre-seed and seed women-led ventures."
                    />
                    <BoardRight
                    headshotURL={kofi}
                    bio="Kofi Ampadu is a general partner SKU'D ventures, a pre-seed fund that invests in consumer brand startups."
                    />
                </span>
                <br/>
                <br/>
            </div>
        );
    }
}