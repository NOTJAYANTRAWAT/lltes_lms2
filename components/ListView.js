  import { motion } from "framer-motion";
  import { relative } from "path";
  import React, { useEffect, useState } from "react";
  import axios from 'axios';
  import Backgroundcircles from "./Backgroundcircles";
  import BackgroundImage from "./BackgroundImage";


  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease:" easing "}
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: " easing "
      }
    }
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  function ListView ({ courses }){
    return (
      
      <motion.div  className="flex items-center"  style={{ position: "relative" }}>
      <div className="mt-10 ml-4" style={{
  position: "absolute",
  left: 100,
  right:100,
  top:100,
  bottom: 0,
  backgroundImage: `url('/bgimage.png')`,
  
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  height: "80%",
  width: "80%",
  filter: "blur(3px)"
  
}}>
  </div>
       
      <ul className="list-none p-8 mt-5" style={{ width: 1000, position: "relative", zIndex: 1 }}>
      <motion.div variants={stagger} >
        {courses.map(course => (
          <li
          key={course.id}
          className={` w-42 max-w-auto shadow-2xl bg-[#FFFFFF] opacity-80 rounded-lg my-8 flex items-center`}
          style={{ minWidth: "100px" }}
        >
        
            {/* <a
              href="/Subject"
              className="flex items-center  w-max   p-4"
            >
              <motion.img
              whileHover={{
                 position:'relative',
                 zIndex:1,
                 scale:[.9,1],
                
                 transition:{
                  duration:0.2
                 }
              }}
              whileTap={{
                scale: 0.7,
                rotate: -360,
                borderRadius: "120%"
              }}
              src={`/${course.id}.png`}
              alt={course.name}
              className="custom-image w-[100px] h-32 space-x-32"
              />
              </a> */}

              
              <div className="flex-1 items-center mr-40 ml-80 ">
              <h3 className="text-2xl space-y-10 font-inter font-bold">{course.name}</h3>
                
              </div>
            
          </li>
        ))}
        </motion.div>
      </ul>
      
      
      <div style={{ position: "relative", left: '20%', marginTop: '-500px' }} >
        <Backgroundcircles/>
      </div>
      
      <div className=" w-1/2 p-8 mt-16 mx-auto" style={{ position: "relative", left: '-2%', marginTop: '-500px' }}>
      
        <h2 className="text-center uppercase  text-black font-inter text-4xl mr-100 "><span className="text-[#7F56D9]">C</span>
        ourses</h2>
        <p className="text-gray-700 mt-4  font-inter text-justify ">
          <span className="text-[#7F56D9] text-2xl">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          
        </p>
      </div>
      
    </motion.div>
    
  );
};


export async function getStaticProps(){
  try{
    const response = await axios.get('https://back-test1.azurewebsites.net/api/getClasses?code=DKo1bSyC6YmyxyOG0BT82LzyU4fIJWI_NVjISqmszrgJAzFu0ho0eQ==');
    const data = await response.data
    return {
      props: {
        courses: data
      }
    }
  }catch(error){
    return {
      props: {
        courses: error
      }
    }
  }
}  

export default ListView;