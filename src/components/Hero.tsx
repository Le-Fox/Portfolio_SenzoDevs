import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'
import { PageInfo } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
    pageInfo:PageInfo
}

function Hero({pageInfo}: Props) {
    const [text,count] =useTypewriter({
        words: ["Hi, I'm Senzo Mkupa","Developer...","Creator...","Problem Solver!"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='flex flex-col space-y-6 items-center justify-center 
    text-center lg:text-left lg:items-start lg:justify-start lg:h-full'>
      {/* Profile Section */}
      <div className='flex flex-col items-center lg:flex-row lg:items-start lg:space-x-6'>
        <Image
          className='relative rounded-full h-24 w-24 lg:h-28 lg:w-28 object-cover'
          src={urlForImage(pageInfo?.heroImage).url()}
          width={112}
          height={112}
          alt='Profile image'
        />
        
        <div className='z-20'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 lg:mt-0'>
            {pageInfo?.name}
          </h1>
          <h2 className='text-sm uppercase text-gray-500 tracking-[8px] mt-2'>
            {pageInfo?.role}
          </h2>
        </div>
      </div>

      {/* About Section */}
      <div className='max-w-2xl lg:mt-6'>
        <p className='text-base text-gray-400'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>

      {/* Contact Info */}
      <div className='w-full mt-4 lg:mt-auto'>
        <div className='flex flex-row items-center justify-center lg:justify-start 
        flex-wrap gap-4'>
          <div className='flex items-center justify-center lg:justify-start space-x-5'>
            <svg className="h-5 w-5 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
            </svg>
            <p className='text-base'>{pageInfo?.address}</p>
          </div>
          <div className='flex items-center justify-center lg:justify-start space-x-5'>
            <svg className="h-5 w-5 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
            </svg>
            <p className='text-base'>{pageInfo?.email}</p>
          </div>
          <div className='flex items-center justify-center lg:justify-start space-x-5'>
            <svg className="h-5 w-5 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 22.621L14.479 17.099C13.38 17.687 12.149 18 10.859 18C6.819 18 3.535 14.716 3.535 10.676C3.535 6.636 6.819 3.352 10.859 3.352C14.899 3.352 18.183 6.636 18.183 10.676C18.183 11.966 17.87 13.197 17.282 14.296L22.804 19.818L20 22.621ZM10.859 5.352C7.922 5.352 5.535 7.739 5.535 10.676C5.535 13.613 7.922 16 10.859 16C13.796 16 16.183 13.613 16.183 10.676C16.183 7.739 13.796 5.352 10.859 5.352Z"/>
            </svg>
            <p className='text-base'>{pageInfo?.phoneNumber}</p>
          </div>
        </div>
      </div>

      {/* Navigation
      <nav className='w-full mt-4'>
        <ul className='flex flex-wrap justify-center xl:justify-start gap-2'>
          <li>
            <Link href='#about'>
              <button className='heroButton'>About</button>
            </Link>
          </li>
          <li>
            <Link href='#experience'>
              <button className='heroButton'>Experience</button>
            </Link>
          </li>
          <li>
            <Link href='#skills'>
              <button className='heroButton'>Skills</button>
            </Link>
          </li>
          <li>
            <Link href='#projects'>
              <button className='heroButton'>Projects</button>
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  )
}

export default Hero