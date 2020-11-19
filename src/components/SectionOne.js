import React from 'react';

//import for images
import illustrationTwo from '../images/illustration-2.svg';
import avatar from '../images/avatar-testimonial.jpg';
import quotes from '../images/icon-quotes.svg';
import arrow from '../images/icon-arrow.svg';


class SectionOne extends React.Component {
    render() {
        return(
            <section id="section-one-container">

                <div className="container" id="section-container">

                    <div className="section-text-container">

                        <h1 className="section2-maintext">Stay productive, wherever you are</h1>

                        <p className="subtext">
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your
                            file storage needs.
                        </p>

                        <p className="subtext">
                            Securely share files and folders with friends, family and colleagues for live collaboration. No
                            email attachments required!
                        </p>

                        <span><a href="" className="link">See how Fylo works</a><img src={arrow} alt=""/></span>

                        <div className="testimonial">

                            <p>
                                <p><img src={quotes} alt=""/></p>
                                <br/>

                                <p className="testimonial-text">
                                    Fylo has improved our team productivity by an order of magnitude. Since making the switch
                                    our team has become a well-oiled collaboration machine.
                                </p>
                            </p>

                            <div className="avatar-container">
                                <img src={avatar} alt="" className="avatar"/>
                                <p className="avatar-name">
                                    Kyle Burton <br/> <span className="job">Founder & CEO, Huddle</span>
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="section-image-container">
                        <img src={illustrationTwo} alt="" className="img-content"/>
                    </div>

                </div>

            </section>
        )
    }
}

export default SectionOne;