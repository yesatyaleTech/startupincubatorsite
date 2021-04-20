import React from 'react';
import '../../index.css';
import './About.css'
import Leaders from './Leaders/Leaders';
import clark from '../../images/headshots/clarkk.jpeg';
import johnathan from '../../images/headshots/johnathanp.jpg';
import emma from '../../images/headshots/emmar.jpeg';
import BoardLeft from './BoardLeft/BoardLeft';
import BoardRight from './BoardRight/BoardRight';
import chanwook from '../../images/headshots/chanwookp.jpg';
import prastik from '../../images/headshots/prastik.jpeg';
import alex from '../../images/headshots/alexc.jpeg';
import vicki from '../../images/headshots/vicki.jpeg';
import lisbeth from '../../images/headshots/lisbeth.jpeg';
import philip from '../../images/headshots/philip.jpeg';
import sam from '../../images/headshots/sam.jpeg';
import leslie from '../../images/headshots/leslie.jpeg';
import kofi from '../../images/headshots/kofi.jpeg';
import IncubatorImage from '../../images/illustrations/Incubatorb.svg';

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
                    name="Emma Reilly"
                    bio="Emma is a senior in Pierson College on the women’s lacrosse team and is currently taking a gap year."
                    role="VC Team Lead"
                    />
                    <Leaders
                    headshotURL={clark}
                    name="Clark Klitenic"
                    bio="Clark is a sophomore Trumbullian playing on the Varsity Baseball team currently on a gap semester to work on StatStak."
                    role="Incubator Lead"
                    />
                    <Leaders
                    headshotURL={johnathan}
                    name="Johnathan Pierre"
                    bio="Jonathan is a first-year in Saybrook from Boston, MA, studying economics and math."
                    role="Pod Experience Lead"
                    />
                </span>
                <h2>
                    Our Curator<span className="replace-s">s</span>
                </h2>
                <span className="leaders">
                    <Leaders
                    headshotURL={chanwook}
                    name="Chanwook Park"
                    bio="Chanwook Park is a first-year in Saybrook College interested in studying S&DS and/or Global Affairs."
                    />
                    <Leaders
                    headshotURL={prastik}
                    name="Prastik Mohnraj"
                    bio="Prastik Mohanraj is a rising second-year in Grace Hopper College hoping to study Economics and Political Science."
                    />
                    <Leaders
                    headshotURL={alex}
                    name="Alex Chun"
                    bio="Alex Chun is a first-year in JE studying Mechanical Engineering and Economics."
                    />
                </span>
                <h2>
                    Meet Our Board
                </h2>
                <span className="board">
                    <BoardLeft
                    name="Vicki Politis"
                    linkedin="https://www.linkedin.com/in/vicki-politis/"
                    headshotURL={vicki}
                    bio="Vicki Politis is the Managing Director of Golden Seeds, a fund that invests in women-led ventures across the nation."
                    />
                    <BoardRight
                    headshotURL={lisbeth}
                    linkedin="https://www.linkedin.com/in/lisbeth-kaufman/"
                    name="Lisbeth Kaufman"
                    bio="Lisbeth Kaufman is the founder of KitSplit and is leading startup mentorship/ development at AWS."
                    />
                    <BoardLeft
                    headshotURL={philip}
                    name="Philip Stanger"
                    linkedin="https://www.linkedin.com/in/philip-stanger-34624532/"
                    bio="Philip Stanger is the Founder and CEO of Olyns and the Entrepreneur in Residence at Vanedge Capital."
                    />
                    <BoardRight
                    headshotURL={sam}
                    name="Sam Hendel"
                    linkedin="https://www.linkedin.com/in/sam-hendel-a2093/"
                    bio="Sam Hendel is the President at Easterly Investment Partners, the Co-Founder of Dataminr, and the co-founder of Accelerate Yale & Yale Angels."
                    />
                    <BoardLeft
                    headshotURL={leslie}
                    name="Leslie Goldman"
                    linkedin="https://www.linkedin.com/in/leslieagoldman/"
                    bio="Leslie Goldman is an investor at Blue Ivy Ventures and Co-Founder and general partner at the Artemis Fund which invests in pre-seed and seed women-led ventures."
                    />
                    <BoardRight
                    headshotURL={kofi}
                    name="Kofi Ampadu"
                    linkedin="https://www.linkedin.com/in/kofiampadu/"
                    bio="Kofi Ampadu is a general partner SKU'D ventures, a pre-seed fund that invests in consumer brand startups."
                    />
                </span>
                <br/>
                <br/>
            </div>
        );
    }
}