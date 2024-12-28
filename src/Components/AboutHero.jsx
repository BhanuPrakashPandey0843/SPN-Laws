import React from "react";
import spnLaw from "../images/spnLaw.png";

function AboutHero() {
  return (
    <div className="container">
      <div className="leftContainer">
        <h1>We Are Right Firm</h1>
        <div className="paraGraph">
          <h3>
            Welcome to SPN Law, a distinguished legal firm established in July
            2021. We are located in the heart of Nashik, Maharashtra, at the
            strategic 1st Floor, The Business Park, D’souza Colony, College
            Road. As a Partnership Firm, we specialize in a range of legal and
            accounting services, dedicated to delivering expert solutions
            tailored to our clients.
          </h3>
        </div>
        <button
          className="customButton h-fit
        "
        >
          <a href="#">Read more</a>
        </button>
      </div>
      <div className="rightContainer">
        <div className="squareBox"></div>
        <img className="spnLaw" src={spnLaw} alt="SPN Law" />
      </div>
    </div>
  );
}

export default AboutHero;
