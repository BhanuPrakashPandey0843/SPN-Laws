import React from "react";
import Integrity from "../images/Integrity.png";
import Excellence from "../images/Excellence.png";
import Collaboration from "../images/Collaboration.png";
import Innovation from "../images/Innovation.png";

function OurMission() {
  return (
    <div className="om-container">
      <div className="om-header">
        <h2>Our Mission and Values</h2>
        <h1>Crafting Excellence in SPN Law Academy</h1>
        <h3>
          Crafting excellence at SPN Law Academy involves a relentless pursuit of legal mastery,
          fostering a culture of academic rigor, and nurturing future legal professionals.
          Our commitment to excellence is reflected in our dedication to shaping skilled,
          ethical, and innovative legal practitioners.
        </h3>
      </div>
      <div className="om-box-container">
        <div className="om-box-content">
          <div className="om-box">
            <img src={Integrity} alt="Integrity" />
            <h2>Integrity</h2>
            <p>
              Upholding the highest ethical standards and fostering a culture
              of trust and honesty within our academic community.
            </p>
            <h3><a href="#">Read more</a></h3>
          </div>
          <div className="om-box">
            <img src={Excellence} alt="Excellence" />
            <h2>Excellence</h2>
            <p>
              Striving for academic and professional excellence, empowering our
              students to achieve their full potential and make a positive impact
              in the legal field.
            </p>
            <h3><a href="#">Read more</a></h3>
          </div>
          <div className="om-box">
            <img src={Collaboration} alt="Collaboration" />
            <h2>Collaboration</h2>
            <p>
              Encouraging teamwork, diversity, and shared knowledge to cultivate a
              supportive and inclusive learning environment.
            </p>
            <h3><a href="#">Read more</a></h3>
          </div>
          <div className="om-box">
            <img src={Innovation} alt="Innovation" />
            <h2>Innovation</h2>
            <p>
              Embracing creativity and forward-thinking approaches to legal education,
              preparing our students for the challenges of a dynamic legal landscape.
            </p>
            <h3><a href="#">Read more</a></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
