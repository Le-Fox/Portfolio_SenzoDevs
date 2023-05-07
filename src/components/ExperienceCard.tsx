import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article 
    className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] hover:border hover:border-green-600 snap-center  bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    '>
        <motion.img
        initial={{
            y:-100,
            opacity: 0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}


        className='w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center'
         src="/senzo.png" alt="" />

         <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Junior Developer</h4>
            <p className='font-bold text-2xl mt-1'>SoftServe-Digital</p>
            <div className='flex space-x-2 my-2'>
            <Image
                className='h-10 w-10 rounded-full' 
                width={50}
                height={50}
                src="/senzo.png" alt="" />
                <Image
                className='h-10 w-10 rounded-full' 
                width={50}
                height={50}
                src="/senzo.png" alt="" />
                <Image
                className='h-10 w-10 rounded-full' 
                width={50}
                height={50}
                src="/senzo.png" alt="" />
                <Image
                className='h-10 w-10 rounded-full' 
                width={50}
                height={50}
                src="/senzo.png" alt="" />
            </div>
            <p>Started work... -Ended...</p>
            {/* make hieght scrollable */}
            <ul className='list-disc space-y-4 ml-5 text-lg max-h-full'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
         </div>
    </article>  
    )
}

export default ExperienceCard