import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Project } from '../../typings';

type Props = {
  projects: Project[];
}

function Projects({projects}: Props) {

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className='h-screen relative  overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto z-20 items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-green-500/20 scrollbar-thin  scrollbar-thumb-green-700/80'>
        {projects.map((project)=> (
        <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img width={100} height={100} src='/senzo.png' alt=''/>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              {project.title}
            </h4>
            <p className='text-lg text-center md:text-left'>
              {project.summary}
            </p>
          </div>
        </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%} bg-green-900 left-0 h-[500px] -skew-y-12'></div>
     </motion.div>
  )
}

export default Projects