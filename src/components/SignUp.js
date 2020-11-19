import React from "react";

import cloudStorage from "../images/cloud storage.png";
import logoWhite from "../images/logo white.svg";

import "../styles/signUp.css";

export default class SignIn extends React.Component {
  render() {
    return (
      <div className="signup-main-container">
        <div className="signup-picture-div">
          {/* <div className="signup-image">
            <img src={cloudStorage} alt="" />
          </div> */}
          <div className="signup-logo">
            <img src={logoWhite} alt="" />
            <p className="signup-logo-text">
              The best Cloud storage system you could ask for. <br /> secure,
              reliable and accessable anywhere.
            </p>
          </div>
        </div>

        <div className="signup-form-div">
          <h1>Sign up to fylo</h1>
          <form class = "mt-5">
            <div class="form-column">
              <div class="col mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="example@example.com"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password..."
                />
              </div>
              <div class="col mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password..."
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
