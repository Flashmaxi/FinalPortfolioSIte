import Image from "next/image";
import { Link } from "react-scroll/modules";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link to="home" spy={true} smooth={true} offset={50} duration={100}>
          <Image
            src="/../public/assets/mylogo.png"
            alt="/"
            width="125"
            height="70"
          />
        </Link>

        <div>
          <ul className="hidden md:flex ">
            <Link to="home" spy={true} smooth={true} offset={50} duration={100}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/mylogo.png"
                alt="/"
                width="87"
                height="35"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's work on interesting projects!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/edo-r-2227a6209/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Flashmaxi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:edorizvic4@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>

                <a
                  href="https://mobile.twitter.com/echoromeo15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
