import React from 'react'
import btc from "../public/assets/projects/btcmeetups.png";
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri'



export default function Meetups() {
  return (
    <div className='w-full'>
      <div className='w-screen h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={btc} alt='/'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>BTC Meetups</h2>
          <h3>NextJS / CSS Modules / Firebase</h3>
      </div>
    </div>
    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was build with NextJS as a practice. All data of meetups is stored in Firebase. Users can organize a meetup for other Bitcoin community members. They can add exact location, address, picture and more details regarding the meetup. This app will be further developed in future and I will add some registration and login options, authentication, comments.
          </p>
          <a
            href='https://btc-meetups.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
        </div>
    </div>
  )
}
