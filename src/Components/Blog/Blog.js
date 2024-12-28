import React from 'react';
import Hero from '../hero/Hero';
import LatestBlog from './LatestBlog';

const Blog = () => {
  const blogs = [
    {
      img: "/Images/ELearning/pic1.jpg",
      blog: "Blog 1",
      text: "This is the first blog post on our law website. It covers the basics of legal terminology and concepts."
    },
    {
      img: "/Images/ELearning/pic1.jpg",
      blog: "Blog 1",
      text: "This is the first blog post on our law website. It covers the basics of legal terminology and concepts."
    },
    {
      img: "/Images/ELearning/pic1.jpg",
      blog: "Blog 1",
      text: "This is the first blog post on our law website. It covers the basics of legal terminology and concepts."
    },
    {
      img: "/Images/ELearning/pic1.jpg",
      blog: "Blog 1",
      text: "This is the first blog post on our law website. It covers the basics of legal terminology and concepts."
    },
    {
      img: "/Images/ELearning/pic1.jpg",
      blog: "Blog 1",
      text: "This is the first blog post on our law website. It covers the basics of legal terminology and concepts."
    },
    {
      img: "/Images/ELearning/pic1.jpg",
      blog: "Blog 1",
      text: "This is the first blog post on our law website. It covers the basics of legal terminology and concepts."
    }
  ];

  return (
    <div className='pt-12'>
      <Hero className="pb-6 " />
      <div className="flex flex-col items-center mt-10 mx-2">
        <h1 className="text-4xl font-bold mb-5">Law Blogs</h1>
        <div className="w-full max-w-full gap-4 grid lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-5 mb-5">
              <img src={blog.img} alt={`Blog ${index + 1}`} className="w-full h-auto mb-5 rounded-md" />
              <h2 className="text-2xl font-bold mb-3">{blog.blog}</h2>
              <p className="text-gray-700">{blog.text}</p>
              <p className='text-blue-400 cursor-pointer'>Read more..</p>
            </div>
          ))}
        </div>
      </div>
      <LatestBlog />
    </div>
  );
}

export default Blog;
