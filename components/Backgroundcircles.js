import React from 'react'
import {motion} from "framer-motion";

export default function Backgroundcircles({}) {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,1.0],
      borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
      duration:3.5,
    }}
    
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#7F56D9]/50 rounded-full h-[300px] w-[300px] mt-52 animate-bounce'/>
        <div className='absolute border border-[#20B486]/50 rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='absolute border border-[#20B486]/50 rounded-full h-[600px] w-[600px] mt-52 animate-ping'/>
        <div className='rounded-full border border-[#20B486] opacity-20 h-[800px] w-[800px] absolute mt-52 animate-ping'/>
    </motion.div>
  )
}