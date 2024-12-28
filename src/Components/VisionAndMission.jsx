import React, { useEffect } from "react";
import vision from "../images/vision.png";
import mission from "../images/mission.png";
import values from "../images/values.png";
import commitment from "../images/commitment.png";
import "./VisionAndMission.css";

function VisionAndMission() {
  useEffect(() => {
    const elements = document.querySelectorAll(".section-content");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup function
  }, []);

  return (
    <div className="container mt-80 lg:mt-0">
      <div className="max-w-7xl m-auto">
        <div className=" text-center   ">
          <h1 className="text-4xl font-semibold py-10 text-[#2F4B79]">
            Our Vision and Mission
          </h1>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="container ">
            <img src={vision} alt="Vision"></img>
          </div>
          <div className="container">
            <h3 className="self-center text-lg">
              At SPN ACADEMY, our vision is to be a leading educational
              institution known for exceptional quality education. We focus on
              equipping students with skills, knowledge, and values for success
              in a changing world. Through fostering innovation, critical
              thinking, and social responsibility, we prepare students to shape
              society positively. Our faculty, highly qualified and dedicated,
              ensures teaching excellence. Quality education is maintained
              through continuous reviews and feedback mechanisms, providing a
              transformative learning experience for student success.
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="container order-2 md:order-1">
            <h3 className="self-center text-lg">
              At SPN ACADEMY, our mission is to provide a challenging yet
              supportive learning environment that empowers students to become
              critical thinkers, lifelong learners, and responsible citizens. We
              are committed to fostering a love of learning and a desire to make
              a positive impact on the world. By offering a rigorous academic
              curriculum combined with opportunities for personal growth and
              community engagement, we aim to prepare our students to thrive in
              an ever-evolving global landscape.
            </h3>
          </div>
          <div className="container order-1 md:order-2">
            <img src={mission} alt="Mission"></img>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="container">
            <img src={values} alt="Values"></img>
          </div>
          <div className="container">
            <h3 className="self-center text-lg">
              {" "}
              At SPN Law Firm, integrity is paramount as we uphold the highest
              ethical standards, while striving for excellence in every case to
              exceed client expectations. Respect guides our interactions,
              fostering inclusivity and fairness, and accountability ensures
              transparency and trust. Collaboration is key, promoting teamwork
              for optimal outcomes, and a client-centric approach prioritizes
              their needs and objectives, forming the core values of our legal
              practice.
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row ">
          <div className="container order-2  md:order-2">
            <h3 className="text-lg self-center">
              {" "}
              In our commitment to clients, we provide expert legal advice and
              representation, advocating fiercely for their rights. Clear
              communication is key, ensuring clients are informed at every
              stage. Tailored solutions are offered to meet unique needs, and
              community engagement is a core mission through pro bono work and
              support for social causes. Continuous improvement drives us to
              enhance services and stay at the forefront of the legal industry.
            </h3>
          </div>
          <div className="container ">
            <img src={commitment} alt="Commitment"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionAndMission;
