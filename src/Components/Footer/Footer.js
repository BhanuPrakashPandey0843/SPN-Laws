import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    const E_logo = [
        {
          name: "insta",
          logo: <AiFillInstagram />,
        },
        {
          name: "whatsapp",
          logo: <IoLogoWhatsapp />,
        },
        {
          name: "fb",
          logo: <FaFacebook />,
        },
        {
          name: "youtube",
          logo: <IoLogoYoutube />,
        },
        {
            name: "linkedIn",
            logo: <FaLinkedin />,
          },

      ];
    const usefull_links =[
        {
            text:"",
            link:""
        },
        {
            text:"Contact Us",
            link:"/contact"
        },
        {
            text:"How  it Works",
            link:"/howitworks"
        },
        {
            text:"Explore",
            link:"/explore"
        },
        {
            text:"Terms & Services",
            link:"/terms&services"
        },


    ]
    const community =[
        {
            text:"",
            link:""
        },
        {
            text:"Help Center",
            link:"/helpcenter"
        },
        {
            text:"Partners ",
            link:"/partners"
        },
        {
            text:"Suggestions",
            link:"/suggestions"
        },
        {
            text:"Blog",
            link:"/blog"
        },
        {
            text:"Newsletters",
            link:"/newsletters"
        },

    ]
  return (
    <footer className="bg-[#2F4B79] text-white -mb-5 pt-8 border-t border-solid border-gray-300 border-opacity-50 relative ">

      <div className="container mx-auto flex flex-col py-12 lg:flex-row justify-between items-center">

        <div className="footer-logo mb-4 lg:mb-0">
            <div className='flex mb-4 ms-16  lg:mb-0'>
          <img src="/Images/spn.png" alt="Company Logo" className="h-12 w-auto bg-white rounded-full" />
          <div className="text-center pt-3 ps-3 font-semibold">SPN LAW.</div>
          </div>

          <div className="footer-social mb-4 lg:mb-0 lg:pt-8 text-center lg:text-left">
          <ul className="flex justify-center lg:justify-start space-x-4">
          <div className=" justify-between gap-3 flex  ">
          {E_logo.map((logos, index) => (
            <div
              className="h-8 w-8 bg-[#CEA252]  flex items-center justify-center rounded-full "
              key={index}
            >
              <div className="text-white text-[22px] hover:text-3xl duration-150 cursor-pointer ">
                {logos.logo}
              </div>
            </div>
          ))}
        </div>
          </ul>
        </div>
        </div>
        <div className="footer-links mb-4 lg:mb-0 text-center lg:text-left">
        <div className='text-xl font-medium ms-8'>Usefull Links</div>
          <ul className="flex flex-wrap flex-col justify-center lg:justify-start space-y-3">
            {usefull_links.map((texts, index) => (  
            <li key={index} ><a href={texts.link} className="text-sm  text-white no-underline opacity-60 hover:text-[#CEA252]">{texts.text}</a></li>
            ))}
        </ul>
        </div>
        <div className="footer-Community mb-4 lg:mb-0 text-center lg:text-left">
        <div className='text-xl font-medium ms-7'>Community</div>

          <ul className="flex flex-wrap flex-col justify-center lg:justify-start space-y-1.5">

          {community.map((texts, index) => (  
            
            <li key={index}><a href={texts.link} className="text-sm text-white opacity-60 no-underline hover:text-[#CEA252] cursor-pointer">{texts.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-info mb-4 lg:mb-0 text-center lg:text-left ">
          <p className="text-lg font-medium ">Founder Of Spn law.</p>
         <p className="text-sm opacity-60 hover:text-[#CEA252] cursor-pointer"  >Unknown</p> 
         <p>{" "}</p>  
        </div>
      </div>
      <hr className="py-6 mx-10 text-gray-300"></hr>
      <div className=" mx-auto text-center w-full ">
        <p className="text-xs py-4 bg-[#CEA252]">&copy;2024 Made By Pixel Perfect Films. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
