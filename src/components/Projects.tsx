import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className='h-screen flex items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Projects</h3>
     </motion.div>
  )
}

export default Projects