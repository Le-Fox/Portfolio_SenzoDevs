import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import type { Experience } from '../../typings'

type Props = {
  experiences:Experience[]
}

function Experience({experiences}: Props) {
  return (
    <motion.div className='relative flex flex-col text-left max-w-full xl:pt-10'>
      <h3 className='uppercase tracking-[20px] text-2xl text-center xl:text-left mb-8'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory 
      scrollbar-track-gray-500/20 scrollbar-thin scrollbar-thumb-[#22c55e]/80'>
        {experiences.map((experience) =>(
          <ExperienceCard key={experience?._id} experiences={experience}/>
        ))} 
      </div>
    </motion.div>
  )
}

export default Experience