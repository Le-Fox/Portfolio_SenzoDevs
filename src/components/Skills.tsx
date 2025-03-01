import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import type { Skill as Skills } from '../../typings'

type Props = {
  skills: Skills[];
}

function Skills({skills}: Props) {
  return (
    <motion.div className='relative flex flex-col text-center xl:text-left max-w-full xl:pt-10'>
      <h3 className='uppercase tracking-[20px] text-2xl mb-8'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-sm text-center 
      px-4 md:px-0'>Hover over a skill for current proficiency</h3>
      
      <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4'>
        {skills.map((skill) =>
          <Skill key={skill?._id} skill={skill}/>
        )}
      </div>
    </motion.div>
  )
}

export default Skills