import React, { useEffect } from "react";
import VideoFeedback1 from "../images/videoFeedback1.jpg";
import VideoFeedback2 from "../images/videoFeedback2.jpg";
import VideoFeedback3 from "../images/videoFeedback3.jpg";

function VideoFeedback() {
  useEffect(() => {
    const elements = document.querySelectorAll(".vf-videos");

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

    return () => observer.disconnect();
  }, []);

  const videos = [
    {
      src: VideoFeedback1,
      title: "Exceeding Expectations",
      description:
        "Hear directly from students and alumni as they share their experiences, insights, and success stories with SPN Law Academy. Explore firsthand accounts of how our innovative approach has made a positive impact.",
    },
    {
      src: VideoFeedback2,
      title: "Transformative Learning",
      description:
        "Discover how our courses and teaching methods have transformed the academic journeys of our students, leading to successful careers in law.",
    },
    {
      src: VideoFeedback3,
      title: "Personal Growth",
      description:
        "Learn how SPN Law Academy has contributed to the personal and professional growth of our students, fostering a lifelong love for learning and excellence.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 flex flex-col items-center container">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-6xl">
        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold text-[#2F4B79]">Video Feedback</h2>
          <h1 className="text-2xl font-semibold text-black">
            Hear From Our Satisfied Customers
          </h1>
          <h3 className="text-gray-700 mt-4 text-lg">
            Hear directly from students and alumni as they share their
            experiences, insights, and success stories with SPN Law Academy.
            Explore firsthand accounts of how our innovative approach to legal
            education has made a positive impact on their academic and
            professional journeys.
          </h3>
        </div>
        <div className="space-y-12 ">
          {videos.map((video, index) => (
            <div
              key={index}
              className=" grid grid-cols md:grid-cols-2 flex-col   md:flex-row items-center bg-gray-50 rounded-lg shadow-md p-6"
            >
              <div className="flex-1 p-4 ">
                <img
                  src={video.src}
                  alt={video.title}
                  className="w-full max-w-xs rounded-lg shadow-md"
                />
                <button className="mt-4 bg-[#2F4B79] h-fit text-nowrap text-white py-2 px-4 rounded hover:bg-blue-700">
                  <a href="/" className="no-underline text-white ">
                    Watch the video
                  </a>
                </button>
              </div>
              <div className="flex-1 p-4">
                <div className="vf-videos-right-content">
                  <h2 className="text-lg font-semibold text-blue-800">Video</h2>
                  <h1 className="text-2xl font-bold text-[#2F4B79] mt-2">
                    {video.title}
                  </h1>
                  <p className="text-gray-700 mt-4">{video.description}</p>
                  <a href="/" className="text-blue-600 mt-4 inline-block">
                    Click to watch video
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <button className="bg-[#2F4B79] text-white h-fit py-2 px-6 rounded hover:bg-blue-700">
              <a href="/" className="no-underline text-white">
                View All
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFeedback;
