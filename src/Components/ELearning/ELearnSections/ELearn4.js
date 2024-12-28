import React from 'react'

const ELearn4 = () => {
    const blog =[
        {
            img:"/Images/ELearning/pic1.jpg",
            date:"December 12",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
            readmore:"/"
        },
        {
            img:"/Images/ELearning/pic1.jpg",
            date:"December 12",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
            readmore:"/"
        },
        {
            img:"/Images/ELearning/pic1.jpg",
            date:"December 12",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
            readmore:"/"
        },

    ]
  return (
    <div className='mx-2 lg:mx-20 '>
        <h1 className='text-center text-3xl lg:text-5xl font-semibold text-[#2f4b79]'>Our Latest Blog</h1>
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-3 py-10 lg:grid-rows-1 gap-3 lg:gap-6'>
    {blog.map((blogs, index) => (
        <React.Fragment className='' key={index}>
            <div className='p-4 bg-[#2F4B79] rounded-xl space-y-2 '>
                <img src={blogs.img} alt='courses' className='rounded-xl'/>
                <div className='font-semibold text-xs text-gray-300 opacity-65'>{blogs.date}</div>
                <h2 className='text-white text-sm lg:text-base'>{blogs.text}</h2>
                <h3 className='text-white text-xs lg:text-sm'>{blogs.detail}</h3>
                <div href={blogs.readmore} className='text-blue-400'>Read More</div>
                </div>
        </React.Fragment>
    ))}
      </div>
    </div>
    </div>
  )
}

export default ELearn4
