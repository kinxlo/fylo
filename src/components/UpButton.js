import React from 'react';

export default class UpButton extends React.Component {

    handleButtonVisibility() {
        const windowHeight = window.pageYOffset;
        const navHeight = document.querySelector('.nav');

        if(windowHeight  >= navHeight.getBoundingClientRect().height) {
            console.log(windowHeight);
            
        }
        
    }

    render() {

        window.addEventListener('scroll', this.handleButtonVisibility)

        return (
            <a className="scroll-link top-link" href="#home">
                <i className="fas fa-arrow-up"></i>
            </a>
        )
    }

}



// export default UpButton;

