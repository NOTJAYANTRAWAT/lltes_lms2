import React from 'react'
import {motion} from "framer-motion";

export default function Backgroundcircles({}) {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}
    animate={{
      scale:[0.1,0.2,1],
      opacity:[0.1,0.13,0.3,0.8],
      borderRadius:["20%","20%","30%","50%","20%"],
    }}
    transition={{
      duration:1.5,
    }}
    
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#7F56D9] opacity-70 rounded-full h-[200px] w-[200px] mt-52 animate-bounce'/>
        <div className='absolute border border-[#7F56D9] opacity-80 rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border border-[#7F56D9] opacity-50 rounded-full h-[400px] w-[400px] mt-52 animate-ping'/>
        <div className='absolute border border-[#7F56D9] opacity-20 rounded-full  h-[500px] w-[500px]  mt-52 animate-ping'/>
    </motion.div>
  )
}