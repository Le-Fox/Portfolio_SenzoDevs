import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import { Skill as Skills} from '../../typings';

type Props = {
  skills: Skills[];
}

function Skills({skills}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Skills</h3>
    <h3 className='absolute top-36 uppercase tracking-[3px] text-sm'>Hover over a skill for current profieciency</h3>
    <div className='grid grid-cols-4 gap-4'>
      {skills.map((skill) =>
      <Skill key={skill?._id} skill={skill}/>
      )}
      
    </div>
    </motion.div>
  )
}

export default Skills