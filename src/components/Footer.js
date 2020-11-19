import React from "react";
import whiteLogo from "../images/logo white.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <img src={whiteLogo} alt="logo" />

          <div className="flex align-start">
            <ul>
              <li>+1-543-123-4567</li>
              <li>example@huddle.com</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>

            <ul>
              <li>Career</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>

            <ul className="social-media">
              <li>
                <a className="circle" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a className="circle" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="circle" href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
