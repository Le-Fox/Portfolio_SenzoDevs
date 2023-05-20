import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
    experiences:Experience
}


//experiences={experiences}
function ExperienceCard({experiences}: Props) {
  return (
    <article 
    className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 
      h-fit  w-fit md:w-[600px] xl:w-[900px] border-4 hover:border hover:border-green-600 snap-center  bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
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


        className='w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] p-3 object-cover object-center'
         src={urlForImage(experiences?.companyImage)?.url()} alt="" />

         <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experiences?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experiences?.company}</p>
            <div className='flex space-x-2 my-2'>
            {experiences?.technologies?.map((technology)=>
            <Image key={technology._id}
            className='h-10 w-10 rounded-full' 
            width={50}
            height={50}
            src={urlForImage(technology?.image).url()} alt="" />
            )}
            
            </div>
            <p>{new Date(experiences?.dateStarted).toDateString()} - {''}
            {experiences?.isCurrentlyWorkingHere ?'present': new Date(experiences?.dateEnded).toDateString()}</p>
           
            <ul className='list-disc space-y-4 ml-5 text-sm  max-h-full overflow-y-scroll scrollbar-thin scrollbar-track-green-500/20 scrollbar-thumb-green-700/80  z-0'>
                {experiences?.points?.map((point,i) =>
                 <li key={i}>{point}</li>
                )}
            </ul>
         </div>
    </article>  
    )
}

export default ExperienceCard