import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import {Press_Start_2P} from '@next/font/google'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import Image from 'next/image'
import { PageInfo } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
    pageInfo:PageInfo
}

function Hero({pageInfo}: Props) {
   //  const press_Start_2P = Press_Start_2P()
    const [text,count] =useTypewriter({
        words: ["Hi, I'm Senzo Mkupa","Developer...","Creator...","Problem Solver!"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlForImage(pageInfo.heroImage).url()}
        //src='/senzo.png' 
        width={100}
        height={50}
        alt='Cartooned image of Senzo'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase  pb-2 tracking-[15px]'>{pageInfo.role}</h2>
            <h1 className='flex justify-center items-center text-5xl lg:text-6xl font-semibold px-10'>
                {/* add press play font to this below text */}
                <span className='mr-3 tracking-widest'>{text}</span>
                <Cursor cursorColor='green'/>
            </h1>
            <div className='pt-5 '>
                <Link href={'#about'}>
                <button className='heroButton'>About</button>
                </Link>
                <Link href={'#experience'}>
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href={'#skills'}>
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href={'#projects'}>
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero