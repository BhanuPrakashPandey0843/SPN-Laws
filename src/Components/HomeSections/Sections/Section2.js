import React from "react";
import Textra from 'react-textra';

const Section2 = () => {

  return (
    <div className="px-6 md:px-28 m-auto pt-32 md:pt-32">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-2xl md:text-4xl font-bold mb-4 lg:mb-0 text-[#2F4B79]">
          <div>We Have Best Attorneys For</div>
          <div>Your Best Support</div>
        </div>
        <p className="w-full lg:w-1/2 text-base opacity-75 mt-4 lg:mt-0 lg:ml-4">
          "Shaping Tomorrow's Leaders with Excellence, Innovation, and a
          Lifelong Passion for Learning."
        </p>
      </div>
      <div className="flex flex-col lg:flex-row my-10 mx-auto items-center gap-2 justify-between">
        <div className="space-y-3 w-full lg:w-[40%] lg:mr-6">
          <img
            src="/Images/SectionsPic/secPic1.jpg"
            className="w-full"
            alt="Pic1"
          />
          <img
            src="/Images/SectionsPic/secPic2.jpg"
            className="w-full"
            alt="Pic2"
          />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-start">
          <div className="grid gap-1">
            <button className="bg-[#2F4B79] h-12 text-white">
              20 years of experience
            </button>
            <div>
              <img
                src="/Images/SectionsPic/secPic3.png"
                className="w-full rounded-lg"
                alt="Pic3"
              />
            </div>

            <div className="m-auto">

              <Textra effect="rightLeft" className="bg-[#CEA252] text-xl text-center p-2 w-72 lg:w-80 mt-2  rounded-xl font-serif text-white" data={["Registered Cases 800", "Current Cases 102", "Solved Cases 400", "Unattended Cases 200"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
