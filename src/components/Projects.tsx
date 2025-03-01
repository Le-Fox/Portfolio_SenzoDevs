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
     className='min-h-screen relative overflow-hidden flex flex-col text-left 
     md:flex-row max-w-full justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Projects</h3>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
      snap-x snap-mandatory z-20 scrollbar scrollbar-track-green-500/20 
      scrollbar-thin scrollbar-thumb-green-700/80 mt-32'>
        {projects.map((project)=> (
        <div key={project?._id} className='w-screen flex-shrink-0 snap-center 
        flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen'>
          <motion.img 
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            width={100} 
            height={100} 
            src='/senzo.png' 
            alt=''
            className='md:w-[200px] md:h-[200px] object-contain'
          />
          <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-2xl md:text-4xl font-semibold text-center'>
              {project?.title}
            </h4>
            <p className='text-sm md:text-lg text-center md:text-left max-h-40 overflow-y-auto'>
              {project?.summary}
            </p>
          </div>
        </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects