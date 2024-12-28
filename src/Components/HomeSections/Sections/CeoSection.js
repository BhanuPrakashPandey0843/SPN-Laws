import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";



const CeoSection = () => {
  return (
    <div className='bg-slate-200 py-10'>
      <h1 className='self-center text-center text-[#2f4b79]'>About Founder</h1>

      <div className='container flex flex-col '>
        <div className='m-auto'>
          <div className=' flex flex-col m-auto items-center'>
            <div className='rounded-full overflow-hidden items-center -mb-11 z-30'>
              <img src='images/pulkeet.png ' alt='pic' className='w-24 self-center ' />
            </div>
            <div className='bg-white max-w-2xl pt-14 pb-4'>
              <h2 className='text-center text-2xl'> Pulkeet Singh</h2>
              <p className='text-center text-sm font-semibold -mt-2 opacity-45 text-black'>Founder Of SPN</p>
              <p className='text-center  -mt-2  text-black opacity-50 font-sans'>Pulkeet Singh, founder of SPN Law, is renowned for his pioneering legal strategies, commitment to excellence, and dedication to client satisfaction, shaping the firm's reputation with integrity and innovation.</p>
              <div className="text-center flex text-2xl items-center justify-between m-auto max-w-36 opacity-50 pt-2 ">
                <a href="/"><IoLogoInstagram className="transition-transform duration-500 hover:scale-150 text-black" /></a>
                <a href="/"><CiLinkedin className="transition-transform duration-500 hover:scale-150 text-black" /></a>
                <a href="/"><CiFacebook className="transition-transform duration-500 hover:scale-150 text-black" /></a>


              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default CeoSection
