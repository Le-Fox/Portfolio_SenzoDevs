import React from 'react'
import {motion} from 'framer-motion'

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
         src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png" alt="" />

         <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Junior Developer</h4>
            <p className='font-bold text-2xl mt-1'>SoftServe-Digital</p>
            <div className='flex space-x-2 my-2'>
                <img
                className='h-10 w-10 rounded-full' 
                src="https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png" alt="" />
                                <img
                className='h-10 w-10 rounded-full' 
                src="https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png" alt="" />
                                <img
                className='h-10 w-10 rounded-full' 
                src="https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png" alt="" />
                                <img
                className='h-10 w-10 rounded-full' 
                src="https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png" alt="" />
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