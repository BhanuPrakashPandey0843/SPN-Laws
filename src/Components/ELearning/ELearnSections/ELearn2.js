import React from 'react'
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";




const ELearn2 = () => {
    const courses = [
        {
            img:"/Images/ELearning/pic1.jpg",
            text:'What is law: Learn everything about law',
            button:"View Now",
            time:"2h 25m",
            members:"2520",
            price:" ₹599",
            rating:"4.5",
            Mprice:"₹999"
        },
        {
            img:"/Images/ELearning/pic1.jpg",
            text:'What is law: Learn everything about law',
            button:"View Now",
            time:"2h 25m",
            members:"2520",
            price:" ₹599",
            rating:"4.5",
            Mprice:"₹999"
        },
        {
            img:"/Images/ELearning/pic1.jpg",
            text:'What is law: Learn everything about law',
            button:"View Now",
            time:"2h 25m",
            members:"2520",
            price:" ₹599",
            rating:"4.5",
            Mprice:"₹999"
        },
        {
            img:"/Images/ELearning/pic1.jpg",
            text:'What is law: Learn everything about law',
            button:"View Now",
            time:"2h 25m",
            members:"2520",
            price:" ₹599",
            rating:"4.5",
            Mprice:"₹999"
        },
        {
            img:"/Images/ELearning/pic1.jpg",
            text:'What is law: Learn everything about law',
            button:"View Now",
            time:"2h 25m",
            members:"2520",
            price:" ₹599",
            rating:"4.5",
            Mprice:"₹999"
        },
        {
            img:"/Images/ELearning/pic1.jpg",
            text:'What is law: Learn everything about law',
            button:"View Now",
            time:"2h 25m",
            members:"2520",
            price:" ₹599",
            rating:"4.5",
            Mprice:"₹999"
        },
    ] 
  return (
    <div className='m-auto mx-4 space-y-4 lg:mx-20'>
        <div>
      <h1 className='text-center text-[#2f4b79] font-semibold text-2xl lg:text-4xl mb-4 lg:mb-6'>Explore Courses</h1>
      <div className='flex justify-between'>
        <button className='bg-[#2f4b79] px-6 rounded-full h-fit text-white'>Laws</button>
        <div className='flex justify-between'>
        <h4>law </h4>
        
        </div>
        <div className='flex
         justify-between text-white gap-1.5'>
            <div className='p-2.5  bg-[#2F4B79] rounded-full'>        <IoIosArrowBack className='  '/>
</div>
       <div className='p-2.5  bg-gray-400 rounded-full'><IoIosArrowForward /></div> 

        </div>
      </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-3 lg:gap-6'>
    {courses.map((course, index) => (
        <React.Fragment className='' key={index}>
            <div className='p-4 bg-[#2F4B79] rounded-xl space-y-3 '>
                <img src={course.img} alt='courses' className='rounded-xl'/>
                <h2 className='text-white'>{course.text}</h2>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2 text-white text-xs'>
                        <MdAccessTime />
                        <div>{course.time}</div>
                    </div>
                    <div className='flex items-center gap-2 text-white text-xs'>
                    <IoPersonOutline />
                    <div>{course.members}</div>
                    </div>
                        <button className='px-4 h-fit font-medium bg-white rounded-full text-sm text-[#2f4b79]'>
                            {course.button}
                        </button>
                        </div>
                
                <div className='flex justify-between'>
                    <div className='text-sm text-white flex gap-3 items-center'>
                        <div>{course.price}</div>
                        <div className=' line-through text-gray-400 text-xs'>{course.Mprice}</div>
                    </div>
                    <div className='flex items-center gap-2'>
                    <div className='text-gray-400 text-xs'>{course.rating}</div>
                    <div className='flex text-yellow-500 text-sm'>
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    </div>

                    </div>
                </div>
                </div>
        </React.Fragment>
    ))}
      </div>
      <div className='w-full text-center'>
      <button className='p-2 px-4 bg-[#2f4b79] text-center h-fit text-white rounded-full'>View All Courses</button>
      </div>
    </div>
  )
}

export default ELearn2
