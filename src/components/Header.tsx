import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { PageInfo, Social } from '../../typings'

type Props = {
  socials: Social[],
  pageInfo:PageInfo
}

function Header({socials,pageInfo}: Props) {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale: 1
        }}

        transition={{
          duration: 1.5
        }}
        
        className="flex flex-row place-items-center">
          {socials.map((social) =>(
            <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='green'
            bgColor='transparent'
            />
          ))}
        </motion.div>

        <motion.div
        
        initial={{
          x:500,
          opacity: 0,
          scale: 0.5
        }}

        animate={{
          scale: 1,
          x: 0,
          opacity: 1
        }}
        transition={{
          duration:1.5
        }}
        
        className="flex flex-row items-center text-green-300 cursor-pointer">
        <SocialIcon
        className='cursor-pointer'
        url={pageInfo.email}
        fgColor='green'
        bgColor='transparent'
        />
        <p className="uppercase hidden md:inline-flex text-sm text-green-600">
        get in touch
        </p>
        </motion.div>

    </div>
  )
}

export default Header