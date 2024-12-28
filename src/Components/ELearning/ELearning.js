import React, { useState } from 'react';
import ELearn1 from './ELearnSections/ELearn1'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'; import ELearn2 from './ELearnSections/ELearn2';
import ELearn3 from './ELearnSections/ELearn3';
import ELearn4 from './ELearnSections/ELearn4';

const ELearning = () => {
  const [counterOn, setCounterOn] = useState(false);

  const NoOfCounts = [
    {
      start: 1,
      end: 250,
      text: "Total Courses"
    },
    {
      start: 1,
      end: 100,
      text: "Total Intractor"
    },
    {
      start: 1,
      end: 500,
      text: "Total Students"
    },
    {
      start: 1,
      end: 500,
      text: "Total Seats"
    }
  ];

  return (
    <>
      <ELearn1 />
      <div className=' bg-white py-28 text-center container '>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          {counterOn && (
            <div className='text-3xl md:text-5xl text-[#2F4B79] flex  flex-wrap justify-center '>
              {NoOfCounts.map((counts, index) => (
                <React.Fragment key={index}>
                  <div className='inline-block mx-6 mb-6 md:mb-0'>
                    <div className='mb-2'>
                      <CountUp start={counts.start} separator='' end={counts.end} duration={2} delay={0} className='' />+
                    </div>
                    <p className='text-sm text-gray-500 text-opacity-50 font-extralight'>{counts.text}</p>
                  </div>
                  {index !== NoOfCounts.length - 1 && (
                    <div className='line' style={{ width: "1px", height: "50px", backgroundColor: "#2F4B79", margin: "0 20px" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </ScrollTrigger>
      </div>
      <ELearn2 />
      <ELearn3 />
      <ELearn4 />
    </>
  )
}

export default ELearning
