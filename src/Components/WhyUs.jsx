import React from "react";
import WhyChooseUs from "../images/WhyChooseUs.png";
import "./WhyUs.css";

function WhyUs() {
  return (
    <div className="box container">
      <div className="leftBox">
        <h1>Why Choose Us?</h1>
        <h2>Personalized Service</h2>
        <div className="rectContainer"></div>
        <img className="WhyChooseImg" src={WhyChooseUs} alt="WhyChooseUs" />
      </div>
      <div className="rightBox">
        {/* <div className="WhyChooseBorder"></div> */}
        <div className="WhyChooseBox">
          <div className="WhyUsparagraph">
            <h3>
              At S P N Law, we are committed to delivering exceptional legal and
              accounting services with integrity, excellence, and a focus on
              results. Our team is dedicated to assisting clients every step of
              the way, whether they require legal advice, comprehensive
              accounting solutions, or representation in complex legal matters.
              <br />
              <br />
              Recognized as a Micro enterprise in the financial year 2021-22, we
              take pride in our personalized approach and unwavering commitment
              to our clients. Our team of experienced professionals is dedicated
              to upholding the highest standards of legal practice, ensuring
              that each client receives the individual attention and care they
              deserve.
              <br />
              <br />
            </h3>
            <button className="WhyUsButton h-fit">
              <a href="#">Read more</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
