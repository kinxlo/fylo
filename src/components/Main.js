import React from 'react';

//import for component
import HeroContent from './HeroContent';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';


class Main extends React.Component {
    render() {
        return (
            <div>
                <HeroContent />
                <SectionOne />
                <SectionTwo />
            </div>
        )
    }
}

export default Main;