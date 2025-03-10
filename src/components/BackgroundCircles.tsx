import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
    }}
    transition={{
        duration:2.5,
    }}
    
    
    className='relative flex justify-center items-center'>
        <div className=' absolute border border-background-light rounded-full w-[200px] h-[200px] mt-52 animate-ping '/>
        <div className=' absolute border border-background-light rounded-full w-[300px] h-[300px] mt-52 animate-pulse '/>
        <div className=' absolute border border-background-light rounded-full w-[500px] h-[500px] mt-52 animate-pulse '/>
        <div className=' opacity-20 absolute border border-primary-DEFAULT rounded-full w-[650px] h-[650px] mt-52 animate-pulse '/>
        <div/>
    </motion.div>
  )
}

export default BackgroundCircles