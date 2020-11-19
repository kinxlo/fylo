import React from 'react';

//Imports for Images...
import illustrationOne from '../images/illustration-1.svg';


class HeroContent extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="header-banner">

                    {/* text container */}
                    <div className="header-text-container">

                        <h1 className="header-maintext">
                            All your files in one secure <br /> location, accessible anywhere.
                    </h1>

                        <p className="subtext">
                            Fylo stores your most important files in one secure location. Access them
                            wherever you need, share and collaboration with friends, family, and co-workers
                    </p>

                        <form action="">
                            <input type="text" placeholder="    Enter your Email..." className="email" />
                            <input type="button" value="Get Started" className="button" />
                        </form>

                    </div>
                    {/* image container */}
                    <div className="header-image-container">
                        <img src={illustrationOne} alt="" className="img-content" />
                    </div>

                </div>
            </div>
        )
    }
}

export default HeroContent;