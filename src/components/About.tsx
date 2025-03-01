import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../../typings'


type Props = {
  pageInfo:PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative min-h-screen text-center md:text-left 
    px-4 md:px-10 justify-center mx-auto items-center xl:min-h-0 xl:h-auto'>
      <h3 className='absolute top-24 xl:top-0 uppercase tracking-[20px] text-2xl'>
        About
      </h3>

      <div className='space-y-6 px-0 md:px-10 mt-8 xl:mt-16'>
        <h4 className='text-2xl md:text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#22c55e] animate-pulse'>little</span> background
        </h4>
        
        <div className='max-h-[40vh] xl:max-h-[30vh] overflow-y-auto 
        scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#22c55e]/80 
        pr-5'>
          <p className='text-base md:text-lg text-gray-200'>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>

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
    
    </motion.div>
  )
}

export default About