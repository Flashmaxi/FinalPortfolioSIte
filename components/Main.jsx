import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Main() {
  return (
    <div id='home' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Want to build exciting project with me?
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Edo</span>
          </h1>
          <h1 className="py-2 text-gray-700">A front-end web developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a front-end developer specializing in building exciting digital
            experiences. Helping small businesses to make their digital
            presence. Currently, I work with React and NextJS but I enjoy to
            learn about new technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <a
                  href='https://www.linkedin.com/in/edo-r-2227a6209/'
                  target='_blank'
                  rel='noreferrer'
                >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn/> 
            </div>
            </a>
            <a
                  href='https://github.com/Flashmaxi'
                  target='_blank'
                  rel='noreferrer'
                >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub/> 
            </div>
            </a>
            <a href="mailto:edorizvic4@gmail.com">

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail/> 
            </div>
            </a>
            <a
                  href='https://mobile.twitter.com/echoromeo15'
                  target='_blank'
                  rel='noreferrer'
                >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaTwitter/> 
            </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
