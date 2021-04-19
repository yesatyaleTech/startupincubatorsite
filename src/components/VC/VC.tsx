import React from 'react';
import '../../index.css';
import './VC.css'
import VCLeft from './VCLeft/VCLeft';
import VCRight from './VCRight/VCRight';
import IncubatorImage from '../../images/WhatWeDo.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export default class VC extends React.Component<{}>{

    render() {
        return (
            <div className="vc">
                <img src={IncubatorImage} className="incubator-image" />
                <p className="ww-do">
                    The Venture Capital Team serves our founders in a number of crucial ways by bringing their own experiences and perspectives in the VC space to the table.
                    Whether it’s providing pitch feedback for founders preparing to pitch to a VC firm, giving detailed commentary on a founder’s pitch deck, or just helping
                    founders ideate, our VC team offers invaluable insight for founders as they take their venture to the next level. 
                </p>
                <h2>
                    Meet Our VC Team
                </h2>
                <span className="board">
                    <VCLeft
                    headshotURL=""
                    bio="Carolyne is currently taking a gap year while working as a data scientist at Vice Ventures. Her favorite industry verticals include CPG, Climate Tech, AI/ML and Robotics."
                    />
                    <VCRight
                    headshotURL=""
                    bio="Royce is a sophomore on a gap year working with visionary founders, investors, and entrepreneurs at Blue Ivy Ventures."
                    />
                    <VCLeft
                    headshotURL=""
                    bio="Zakaria is a junior at Yale University working as an investment partner at the Dorm Room Fund. Professionally, he worked at Bracebridge, a Boston-based absolute return hedge fund, and is currently working part-time at the Yale Investments Office."
                    />
                    <VCRight
                    headshotURL=""
                    bio="Vikram is a Computer Science and Economics major in Ezra Stiles College. He is a VP at Contrary Capital and has past experience working at startups including Snackpass and Matician, an AI/Robotics startup. "
                    />
                    <VCLeft
                    headshotURL=""
                    bio="Gracie is a junior from Wisconsin pursuing a major in history. She currently works at an ed-tech startup and is a passionate Morse IM Secretary."
                    />
                </span>
                <br/>
                <br/>
            </div>
        );
    }
}