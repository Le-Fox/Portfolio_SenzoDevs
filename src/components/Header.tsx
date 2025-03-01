import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { PageInfo, Social } from '../../typings'

type Props = {
  socials: Social[],
  pageInfo:PageInfo
}

function Header({socials, pageInfo}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between 
    mx-auto z-20 xl:items-center xl:relative xl:max-w-none xl:p-0 xl:mb-6">
      <motion.div
        initial={{x: -500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='#22c55e'
            bgColor='transparent'
            className="mx-1"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{x: 500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className="flex flex-row items-center text-green-300 cursor-pointer"
      >
        <SocialIcon
          className='cursor-pointer'
          network="email"
          fgColor='#22c55e'
          bgColor='transparent'
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#22c55e] font-semibold">
          Get In Touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header