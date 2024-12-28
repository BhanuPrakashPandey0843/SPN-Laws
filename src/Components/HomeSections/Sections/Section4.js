import React from 'react'
import VideoSideScroller from './VideoSideScroller/VideoSideScroller'


const Section4 = () => {
  return (
    <div className='m-auto mt-12 my-7 lg:my-24  mx-6 space-y-4 lg:mx-20 pt-16'>
      <div className='text-center text-[#2F4B79] m-auto space-y-2 pb-4'>
        <h1 className='font-semibold md:text-3xl text-xl lg:text-4xl'>Our Goal And Achievements</h1>
        <h1 className='md:text-2xl text-xl lg:text-4xl'>In Legal Practice</h1>
        <p className='text-base '>"Striving for Excellence: Our Legal Practice's Goal and Achievements."</p>
      </div>
      <div>
        <VideoSideScroller />
      </div>
    </div>
  )
}

export default Section4
