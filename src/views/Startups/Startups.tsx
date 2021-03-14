import React from 'react';
import StartUpCard from '../../components/StartupCard/StartupCard';

export default class Startups extends React.Component<{}> {

    render() {
        return (
            <div className="startups-body">
                <StartUpCard
                    name="Ross Johnson Inc."
                    founder="Ross Johnson"
                    writeup="This is what we do here"
                    websiteLink="https://rossjohnson.tech"
                    contact="rossjohnson@outlook.com"
                    logo="https://quorilla.com/static/media/Avatar-placeholder.2ad578c8.png"
                />
            </div>
        );
    }
}