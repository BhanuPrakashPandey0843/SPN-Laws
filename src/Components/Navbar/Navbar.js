import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const navToggle = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 30);
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const nav_links = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About Us",
      link: "/about",
    },
    {
      text: "Learning",
      link: "/learning",
    },
    {
      text: "Testimonials",
      link: "/testimonials",
    },
    {
      text: "Blog",
      link: "/blogs",
    },
  ];

  return (
    <>
      <div
        className={
          !navbar
            ? 'flex flex-col lg:flex-none fixed bg-[#2F4B79] bg-opacity-80 w-full lg:bg-opacity-90 z-50 pt-2'
            : 'flex blur-backdrop-filter bg-[#2F4B79] bg-opacity-70   flex-col lg:flex-none fixed  shadow-xl w-full z-50 pt-2'
        }
      >
        <div className="flex justify-between items-center lg:px-28 ">
          <div className="lg:order-2 items-center ">
            <div className="lg:hidden text-3xl text-white ms-4">
              <RxHamburgerMenu onClick={navToggle} />
            </div>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -200 }}
                  transition={{ duration: 0.5 }}
                  className="h-screen pt-16 top-0  w-[70%] px-8 absolute text-center bg-gray-500 items-center z-40"
                >
                  {nav_links.map((texts) => (
                    <NavLink
                      to={texts.link}
                      key={texts.text}
                      className={(e) =>
                        e.isActive
                          ? "no-underline border-t-2 border-solid border-white"
                          : "no-underline"
                      }
                      onClick={closeMenu}
                    >
                      <div className="cursor-pointer group px-1 text-white pt-8">
                        <div className="bg-white h-[2px] w-0 rounded-full group-hover:w-full group-active:w-full transform transition-all -mt-0.5 duration-500"></div>
                        {texts.text}
                      </div>
                    </NavLink>
                  ))}
                  <IoMdClose
                    onClick={navToggle}
                    className="text-white text-3xl absolute top-0.5 hover:border hover:border--2px right-0 md:hidden"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="hidden lg:flex lg:space-x-8 xl:space-x-14">
              {nav_links.map((texts) => (
                <NavLink
                  to={texts.link}
                  key={texts.text}
                  className={(e) =>
                    e.isActive
                      ? "no-underline border-t-2 border-solid border-white"
                      : "no-underline"
                  }
                >
                  <div className="cursor-pointer group px-1 text-white">
                    <div className="bg-white h-[2px] w-0 rounded-full group-hover:w-full group-active:w-full transform transition-all -mt-0.5 duration-500"></div>
                    {texts.text}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="lg:order-1 border rounded-full border-transparent shadow-md shadow-black overflow-hidden ms-10 lg:ms-0 w-20">
            <img className="shadow-black bg-white" src={"/Images/spn.png"} alt="spn" />
          </div>
          <div className="lg:order-3">
            <NavLink
              className="border-2 hover:bg-[#CEA252] border-white rounded-md px-1 text-sm lg:px-4 py-1.5 font-sans lg:text-base me-2 text-white no-underline"
              to={"/contact"}
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <hr className="h-2 mt-[10px] -mb-[7px] justify-end z-30 relative"></hr>
        <marquee className="bg-[#CEA252]  text-white font-serif">Click here to chext out the latest blogs</marquee>

      </div>

    </>
  );
};

export default Navbar;
