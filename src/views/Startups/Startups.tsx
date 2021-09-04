import React from 'react';
import StartUpCard from '../../components/StartupCard/StartupCard';
import './Startups.css';
import Ren_logo from '../../images/logos/Ren_logo.jpg'
import Sprxng_logo from '../../images/logos/sprxng.jpg'
import LOB_logo from '../../images/logos/LOB.png'
import craniometrix from '../../images/logos/craniometrix.jpg'
import enlighteN from '../../images/logos/enlighteN.jpg';
import accelgolf from '../../images/logos/accelgolf.webp';
import startups from '../../images/illustrations/Startupsb.svg';

export default class Startups extends React.Component<{}> {

    render() {
        return (
            <div className="startups">
                <h2>
                    Meet <span className="replace-s">S</span>ome of our <span className="replace-s">S</span>tartup<span className="replace-s">S</span> at Yale
                </h2>
                <img src={startups}  className="startup-illustration" />
                <br/>
                <p className="startups-hype">
                    Our founders cover edtech, fitness, cleantech, food, and much, much more. 
                </p>
                <p className="startups-hype">
                    With over 5 million dollars raised in capital, this spring cohort of founders represents the next generation of Yalie founders making an impact on the world. 
                </p>
                <br/>
                <div className="startups-body">
                    <StartUpCard
                        name="Quorilla"
                        founder="Armaan Kalsi"
                        writeup="Two-sided network for live teaching and learning"
                        websiteLink="https://quorilla.com/"
                        contact="ideas@munkyy.com"
                        logo="https://quorilla.com/static/media/Avatar-placeholder.2ad578c8.png"
                    />

                    < StartUpCard
                        name="Librex"
                        founder="Ryan Schiller"
                        writeup="Anonymous social media app for Ivy League students"
                        websiteLink="https://librexapp.com/"
                        contact="ryan.schiller@yale.edu"
                        logo="https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/dc/ac/40/dcac40f8-82e9-3b41-8c2d-d1b3ac778be1/source/512x512bb.jpg"
                    />

                    < StartUpCard
                        name="Prepared"
                        founder="Mike Chime"
                        writeup="Transform the way we communicate during any emergency"
                        websiteLink="https://www.preparedapp.com/"
                        contact="michael@preparedapp.com"
                        logo="https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/50/e9/d8/50e9d8e9-c071-f084-8914-af9970c05203/source/512x512bb.jpg"
                    />
                    
                    <StartUpCard
                        name="Sprxng"
                        founder="Phyllis Mugadza"
                        writeup="Reusable menstrual product that reduces menstrual cramping"
                        contact="phyllis.mugadza@yale.edu"
                        logo={Sprxng_logo}
                    /> 

                    <StartUpCard
                        name="Cadoo"
                        founder="Dan Avila"
                        writeup="Make money for completing running challenges. Get fit. Get Paid."
                        websiteLink="https://www.cadoo.io/"
                        contact="danavila1020@gmail.com"
                        logo="https://photos.angel.co/startups/i/6894606-3655e6a33a49ceaaadda67af9ee85618-medium_jpg.jpg?buster=1592179463"
                    />

                    <StartUpCard
                        name="StatStak"
                        founder="Clark Klitenic"
                        writeup="Powering a new generation of data-driven athletes"
                        websiteLink="https://statstak.io/"
                        contact="clark.klitenic@yale.edu"
                        logo="https://pbs.twimg.com/profile_images/1354626301290807296/fgUPhUZG.jpg"
                    />

                    <StartUpCard 
                        name="Accel Golf"
                        founder="Ami Gianchandani"
                        writeup="The statistics tracking system you need to take your golf game to the next level."
                        websiteLink="https://www.accel-golf.com/about/"
                        contact="ami@accel-golf.com"
                        logo={accelgolf}
                    />

                    <StartUpCard
                        name="Floesafe"
                        founder="David Dellal"
                        writeup="Respond to nature’s winter challenges without damaging nature itself"
                        websiteLink="https://floesafe.com/"
                        contact="info@floesafe.com"
                        logo="https://floesafe.com/wp-content/uploads/2020/06/Floe-logo-blue.png"
                    />
                    
                    <StartUpCard
                        name="Ren"
                        founder="Maddie Mahre"
                        writeup="Sustainable tailor-fit women’s clothing company that offers wardrobe capsules or individual garments without the price tag or wait time"
                        websiteLink="https://www.ren-clothing.com/"
                        contact="maddie.mahre@yale.edu"
                        logo={Ren_logo}
                    />

                    <StartUpCard
                        name="Barista"
                        founder="Ben Kany"
                        writeup="Subscription-based coffee platform that helps users save money while building relationships with local cafés"
                        websiteLink="https://www.baristaoncampus.com/"
                        contact="baristaoncampus@gmail.com"
                        logo="https://media-exp1.licdn.com/dms/image/C560BAQHjCi3N214nrQ/company-logo_200_200/0?e=2159024400&v=beta&t=_VJl5DqpuLXZyHLKGWrJs-kfY0MftudNNrdasOMbcgQ"
                    />

                    <StartUpCard
                        name="Seltz"
                        founder="Brandon Peterson"
                        writeup="Dedication to a healthier, natural alternative to a traditional energy drink"
                        websiteLink="https://www.indiegogo.com/projects/seltz-energy-focus-enhancing-energy-seltzer--2#/"
                        contact="brandon.peterson@yale.edu"
                        logo="https://static1.squarespace.com/static/603bf06c9959d83fcdc0f01e/t/603bf544fe1d40450f163f66/1615300052046/?format=1500w"
                    />

                    <StartUpCard
                        name="Craniometrix"
                        founder="Nikhil Patel"
                        writeup="First software tools that quickly, inexpensively, and accurately catch Alzheimer’s disease years before a doctor"
                        websiteLink="https://craniometrix.com/"
                        contact="n.patel@yale.edu"
                        logo={craniometrix}
                    />

                    <StartUpCard
                        name="Mobius Capsules"
                        founder="Steve Blanco"
                        writeup="The future of skin care"
                        websiteLink="https://mobiuscapsules.com/"
                        contact="steve.blanco@yale.edu"
                        logo="https://cdn.shopify.com/s/files/1/0493/9513/8721/files/MobiusCapsulesLogoHDblack_copy_160x@2x.png?v=1609616412"
                    />

                    <StartUpCard
                        name="Link"
                        founder="Jacob Rhee"
                        writeup="Centralized platform built to optimize the learning experience for students, while maximizing the benefits of AI in education"
                        websiteLink="https://www.linklearningsolutions.com/"
                        contact="inquiries@linklearningsolutions.com"
                        logo="https://static1.squarespace.com/static/600f6cc2f88eb259bc0f6024/t/60103db564aaa147745c3dd9/1611853820996/?format=1500w"
                    />

                    <StartUpCard
                        name="Ecopackables"
                        founder="Shervin Dehmoubed"
                        writeup="Sustainable packaging company with a B2B approach"
                        websiteLink="https://www.ecopackables.com/"
                        contact="shervin.dehmoubed@yale.edu"
                        logo="https://cdn.shopify.com/s/files/1/0443/9634/7547/files/ecopackables_green_752x.png?v=1595698484"
                    />


                    <StartUpCard
                        name="Lots of Berries"
                        founder="Rakel Tanibajeva"
                        writeup="Sustainable high fashion line sourced entirely from upcycled fabrics"
                        websiteLink="http://lotsofberries.com/"
                        contact="lotsofberries@yahoo.com"
                        logo={LOB_logo}
                    />        

                </div>
            </div>
        );
    }
}
