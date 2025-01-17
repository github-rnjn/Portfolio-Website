"use client"
import React from 'react'
import Image from 'next/image'
import heroprofile from '../public/images/header-profile.png'
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import Link from 'next/link'
function HeroSection() {
  return (
    <section className='text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.2}} className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m{""}</span><br></br><TypeAnimation
    sequence={[
      'Ranjan',
      1000,
      'Web Developer',
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  /></h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Navigate through my portfolio and explore the projects that define my passion for coding.</p>
      <div>
        <button className='px-1 py-1 w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
          <Link href="https://drive.google.com/file/d/1JyCxJ-Bg5Do4a9xH27D2vKwMpweiKHlH/view">Download CV</Link></span></button>
      </div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.2}} className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px]
        lg:w-[400px] lg:h-[400px]
        relative'>
        <Image src={heroprofile}
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' 
        width={300} height={300} alt="hero image"/>
        </div>
      </motion.div>
      </div>
    </section>
  )
}

export default HeroSection