import React from "react";
import logoWhite from "../images/logo white.svg";
import {NavLink} from 'react-router-dom';

import "../styles/signIn.css";

export default class SignIn extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="picture-div">
          <div className="logo">
            <img src={logoWhite} alt="" />
            <p className="logo-text">
              The best Cloud storage system you could ask for. <br /> secure,
              reliable and accessable anywhere.
            </p>
          </div>
        </div>

        <div className="form-div">
          <h1 className="sign-in">Sign In</h1>

          <form>
            <div class="form-column">
              <label class="font-weight-bold ml-3">User Name</label>
              <div class="col mb-3">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  //   placeholder="First name"
                />
              </div>
              <div class="col mb-4">
                <label class="font-weight-bold">Password</label>
                <input
                  type="password"
                  class="form-control form-control-lg"
                  //   placeholder="Last name"
                />
              </div>
              <button type="submit" class="btn btn-primary" >
                Log In
              </button>
            </div>
          </form>
          <p class="text-right mt-1">
            Don't have an Account?<NavLink to = "/SignUp"> Create Account</NavLink>
          </p>
        </div>
      </div>
    );
  }
}
