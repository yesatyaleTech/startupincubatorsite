import React from 'react';
import '../../index.css';
import './VentureCapital.css'
import VCImage from '../../images/illustrations/VCImageb.svg';
import vikram from '../../images/headshots/vikram.jpg';
import carolyne from '../../images/headshots/carolyne.jpg';
import gracie from '../../images/headshots/gracie.jpeg';
import royce from '../../images/headshots/royce.jpg'
import zakaria from '../../images/headshots/zakaria.jpg';
import emma from '../../images/headshots/emmar.jpeg';
import StaggeredCard from '../../components/StaggeredCard/StaggeredCard';

const VentureCapital = () => {
    return (
        <div>
            <div className="vc">
                <img src={VCImage} className="vc-image" />
                <p className="ww-do">
                    The Venture Capital Team serves our founders in a number of crucial ways by bringing their own experiences and perspectives in the VC space to the table.
                    </p>
                <p className="ww-do">
                    Whether it’s providing pitch feedback for founders preparing to pitch to a VC firm, giving detailed commentary on a founder’s pitch deck, or just helping
                    founders ideate, our VC team offers invaluable insight for founders as they take their venture to the next level.
                </p>
                <h2>
                    Meet Our VC Team
                </h2>
                <span className="board">
                    <StaggeredCard
                        side="left"
                        headshotURL={emma}
                        name="Emma Reilly"
                        bio="Emma is a senior in Pierson College on the women’s lacrosse team and is currently taking a gap year."
                        linkedin="https://www.linkedin.com/in/emma-reilly-6b3b11177/"
                    />
                    <StaggeredCard
                        side="right"
                        headshotURL={carolyne}
                        name="Carolyne Newman"
                        linkedin="https://www.linkedin.com/in/carolyne-newman/"
                        bio="Carolyne is currently taking a gap year while working as a data scientist at Vice Ventures. Her favorite industry verticals include CPG, Climate Tech, AI/ML and Robotics."
                    />
                    <StaggeredCard
                        side="left"
                        headshotURL={zakaria}
                        name="Zakaria Gedi"
                        linkedin="https://www.linkedin.com/in/zakaria-gedi/"
                        bio="Zakaria is a junior at Yale University working as an investment partner at the Dorm Room Fund. Professionally, he worked at Bracebridge, a Boston-based absolute return hedge fund, and is currently working part-time at the Yale Investments Office."
                    />
                    <StaggeredCard
                        side="right"
                        headshotURL={vikram}
                        name="Vikram Mullick"
                        linkedin="https://www.linkedin.com/in/vikram-mullick-39978a159/"
                        bio="Vikram is a Computer Science and Economics major in Ezra Stiles College. He is a VP at Contrary Capital and has past experience working at startups including Snackpass and Matician, an AI/Robotics startup. "
                    />
                    <StaggeredCard
                        side="left"
                        headshotURL={gracie}
                        name="Gracie Englebert"
                        linkedin="https://www.linkedin.com/in/gracie-englebert-8161301a5/"
                        bio="Gracie is a junior from Wisconsin pursuing a major in history. She currently works at an ed-tech startup and is a passionate Morse IM Secretary."
                    />
                    <StaggeredCard
                        side="right"
                        headshotURL={royce}
                        name="Royce Tiger"
                        linkedin="https://www.linkedin.com/in/roycetiger/"
                        bio="Royce is a sophomore on a gap year working with visionary founders, investors, and entrepreneurs at Blue Ivy Ventures."
                    />


                </span>
                <br />
                <br />
            </div>
        </div>
    );
}

export default VentureCapital;