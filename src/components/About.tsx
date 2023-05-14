import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../../typings'
import pageInfo from '../../sanity/schemas/pageInfo'

type Props = {
  pageInfo:PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div
    
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen
     text-center md:text-left md:flex-row max-w-7xl px-10
     justify-evenly mx-auto items-center'>
      
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>About</h3>

        {/* I'll add images to the text later */}
        {/* <motion.img
        initial={{
          x:-500,
          opacity:0,
        }}
        animate={{
          x:0,
        }}
        transition={{duration:1.5}}
        whileInView={{
          opacity:1,
          x:0
        }}
        viewport={{
          once:true
        }}
        


        src='https://cdn.sanity.io/images/ltuexkre/production/ac8058b25cc880765f6549dd27223349f37a7c2f-1173x1458.jpg'
        className='rounded-full w-32 h-32'
        width={250}
        height={250}
        /> */}
    

      <div className='space-y-10 md:px-10'>
        <h4 className='text-4xl font-semibold '>Here is a <span className='underline decoration-green-300 animate-pulse'>little</span> background</h4>

        <p className='text-base'>
          {pageInfo.backgroundInformation}
        </p>
      </div>

     </motion.div>
  )
}

export default About