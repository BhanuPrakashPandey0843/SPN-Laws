import React from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Section5 from './Sections/Section5'
import Section6 from './Sections/Section6'
import CeoSection from './Sections/CeoSection'


const AllSection = () => {
  // const NoOfCounts = [
  //   {
  //     start: 1,
  //     end: 1000,
  //     text: "Happy Clients"
  //   },
  //   {
  //     start: 1,
  //     end: 150,
  //     text: "Attorney"
  //   },
  //   {
  //     start: 1,
  //     end: 2000,
  //     text: "Practice Area"
  //   },
  //   {
  //     start: 1,
  //     end: 500,
  //     text: "Case Dismissed"
  //   }
  // ];
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <CeoSection />
    </div>
  )
}

export default AllSection
