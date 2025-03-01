import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
    experiences:Experience
}

function ExperienceCard({experiences}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center flex-shrink-0 
      w-[280px] md:w-[400px] xl:w-[500px] snap-center bg-[#1f2937] 
      p-4 xl:p-6 hover:opacity-100 opacity-70 cursor-pointer 
      transition-opacity duration-200'>
      
      {/* Company Image */}
      <motion.img
        initial={{y:-100, opacity:0}}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='w-20 h-20 md:w-28 md:h-28 rounded-full object-cover 
        object-center border-2 border-primary-DEFAULT'
        src={urlForImage(experiences?.companyImage)?.url()}
        alt={experiences?.company}
      />

      <div className='px-2 md:px-10 w-full space-y-4'>
        {/* Title & Company */}
        <div className='space-y-1'>
          <h4 className='text-xl md:text-3xl font-light text-center md:text-left text-gray-100'>
            {experiences?.jobTitle}
          </h4>
          <p className='font-bold text-lg md:text-2xl text-[#22c55e] text-center md:text-left'>
            {experiences?.company}
          </p>
        </div>

        {/* Tech Stack */}
        <div className='flex space-x-2 justify-center md:justify-start flex-wrap gap-2'>
          {experiences?.technologies?.map((technology)=>
            <Image 
              key={technology._id}
              className='h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1'
              width={40}
              height={40}
              src={urlForImage(technology?.image).url()}
              alt={technology.title}
            />
          )}
        </div>

        {/* Date Range */}
        <p className='text-sm md:text-base text-gray-200 uppercase text-center md:text-left'>
          {new Date(experiences?.dateStarted).toDateString()} - {' '}
          {experiences?.isCurrentlyWorkingHere 
            ? 'Present'
            : new Date(experiences?.dateEnded).toDateString()}
        </p>

        {/* Points/Responsibilities */}
        <ul className='list-disc space-y-2 ml-5 text-sm md:text-base h-64 md:h-80 
        overflow-y-auto scrollbar-thin scrollbar-track-gray-500/20 
        scrollbar-thumb-[#22c55e]/80 pr-5'>
          {experiences?.points?.map((point,i) =>
            <li key={i} className='text-gray-200'>
              {point}
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard