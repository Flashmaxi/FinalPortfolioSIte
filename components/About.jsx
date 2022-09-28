import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-600">I am a self-taught developer</p>
          <p className="py-2 text-gray-600">
            I have spent more than 10 years of my life in sales and finance.
            When I started working for tech company as a sales lead I got my
            moment of clarity and decided to pursue my dream of becoming a
            software developer. I have always loved technology and I was missing
            something just to push me in the right direction.
          </p>
          <p className="py-2 text-gray-600">
            First website I created was for a small business in city I live in
            right now and now I am making more and more every day. I fell in
            love in this and I am even making websites for charities and
            organizations that are helping animals. I am excited to learn new
            technologies as much as I can.
          </p>
          <p className="py-2 text-gray-600">
            Besides all this I am a husband, father and I have best dog in the
            world. I love basketball, craft beer, tattoos and Bitcoin.
          </p>
          <a href="#projects"><p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p></a>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className='rounded-xl' src="/../public/assets/about.webp" alt="" width='500' height='500'/>
        </div>
      </div>
    </div>
  );
}
