import React from "react";
import logo from "./../../photos/logo.svg";
import "./about.css";
import twitter from "./icon-twitter.svg";
import ig from "./icon-instagram.svg";
import pinterst from "./icon-pinterest.svg";
import location from "../../photos/icon-location.svg";
import phone from "../../photos/icon-phone.svg";
import { useState } from "react";
import email from "../../photos/icon-email.svg";

const About = () => {
  const [emaildata, setemaildata] = useState([]);
  const [err, seterr] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (emaildata === "" && emaildata.toString().includes !== "@") {
      seterr(true);
    } else {
      seterr(false);
    }
  };
  return (
    <div className="about">
      <div className="forms">
        <h5>Get Early access Today</h5>
        <p className="formp">
          {" "}
          it only takes a minute to sign up and our free starter tier is
          extremely generous. if you have any questions, feel free to ask{" "}
        </p>
        <form>
          <input
            onChange={(e) => setemaildata(e.target.value)}
            className="input"
            type="text"
            placeholder="email"
            required
          />
          <button onClick={handlesubmit} className="submit">
            Get Stared For Free
          </button>
        </form>
        {err ? <p style={{ color: "red" }}> Email Validation error </p> : ""}
      </div>
      <img className="aboutlogo" src={logo} alt="ad" />
      <div className="aboutpage">
        <div>
          <p className="lorem">
            <img className="imgs" src={location} alt="s" />
            lorem any kind of words can be taken here b/c it is the baoit page
            we dont really care about what we are going to say
          </p>
        </div>
        <div>
          <p className="phone">
            {" "}
            <img className="imgs" src={phone} alt="as" />
            +251-9-23-23-21-32
          </p>
          <p className="phone">
            {" "}
            <img className="imgs" src={email} alt="as" />
            example@gmail.com
          </p>
        </div>
        <div>
          <div className="ul">
            <h2 className="list">About Us</h2>
            <h2 className="list">Job</h2>
            <h2 className="list">Press</h2>
            <h2 className="list">Blog</h2>
          </div>
        </div>
        <div>
          <div className="ul">
            <h2 className="list">Contact Us</h2>
            <h2 className="list">Terms</h2>
            <h2 className="list">Privacy</h2>
          </div>
        </div>
        <div className="logos">
          <img className="aboutlogo" src={ig} alt="s" />
          <img className="aboutlogo" src={pinterst} alt="s" />
          <img className="aboutlogo" src={twitter} alt="s" />
        </div>
      </div>
    </div>
  );
};

export default About;
