import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../../typings'

type Props = {
  experiences:Experience[]
}

function Experience({experiences}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center border-4'>
      <h3 className='absolute top-8 uppercase tracking-[20px] h-[20%] text-2xl ml-6'>Experience</h3>

      <div className='w-full h-[80%] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory bottom-5

       scrollbar-track-green-500/20 scrollbar-thin  scrollbar-thumb-green-700/80'>
       {experiences.map((experiences) =>(
        <ExperienceCard key={experiences?._id} experiences={experiences}/>
       ))} 
      </div>
    </motion.div>
  )
}

export default Experience