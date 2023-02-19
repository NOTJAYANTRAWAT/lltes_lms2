import { AnimatePresence, motion } from "framer-motion";
import { relative } from "path";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Backgroundcircles from "./Backgroundcircles";
import Navbar from "./Navbar";
import Link from "next/link";
import Notes from "./notes";
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

const data = [
  {
    id: 1,
    title: 'Chapter1:intro',
    description: 'Thiz is the description for Item 1'
  },
  {
    id: 2,
    title: 'Chapter1:intro',
    description: 'This is the description for Item 2'
  },
  {
    id: 3,
    title: 'Chemistry',
    description: 'This is the description for Item 3'
  },
  {
    id: 4,
    title: 'Chemistry',
    description: 'This is the description for Item 3'
  },
  {
    id: 5,
    title: 'Chemistry',
    description: 'This is the description for Item 3'
  },
  {
    id: 6,
    title: 'Chemistry',
    description: 'This is the description for Item 3'
  },
];

const Subjects = () => {
  const subjectList = [  
      { id: 1, name: "Mathematics", image: "/maths.png" },  
        { id: 2, name: "Physics", image: "/physics.png" },   
         { id: 3, name: "Chemistry", image: "/chem.png" },   
          { id: 4, name: "Biology", image: "/bio.png" }, 
         ];
         const [isTileOpen, setIsTileOpen] = useState(false);

         const handleImageClick = () => {
           setIsTileOpen(true);
         };
         
         return (
          <div className="  bg-[#e8f1f2] 
           " >
            <div className="mt-10 " style={{
              position: "absolute",
              left:-100,
              right:100,
              top:100,
              bottom: 0,
              backgroundImage: `url('/subject_bg.png')`,
              
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              height: "120%",
              width:" 120%",
              filter: "blur(5px)"
              
            }}>
              </div>
            <Navbar/>
           <motion.div className=" flex  items-center snap-mandatory snap-y ">
            
             <ul className="list-none p-8  mt-5" style={{ width:1000 }}>
               <motion.div variants={stagger}>
                 {subjectList.map((item, index) => (
                   <li
                     key={item.id}
                     className={` w-42 max-w-auto bg-[#Ffffff] shadow-2xl opacity-80 rounded-lg my-8 flex items-center ${
                       index === 0 ? "mt-30" : ""
                     }`}
                   >
                     <a
                       href="#"
                       className="flex items-center  w-max   p-4"
                     >
                       <motion.img
                         whileHover={{
                           position: 'relative',
                           zIndex: 1,
                           scale: [0.9, 1],
                           transition: {
                             duration: 0.2
                           }
                         }}
                         whileTap={{
                           scale: 0.7,
                           rotate: -360,
                         
                         }}
                         onClick={handleImageClick}
                         src={item.image}
                         alt={item.name}
                         className="custom-image   space-x-32"
                       />
                       <div className="flex-1 items-center mr-40 ml-80 ">
                         <h3 className="text-3xl space-y-10 font-bold">{item.name}</h3>
                       </div>
                     </a>
                   </li>
                 ))}
               </motion.div>
             </ul>
             
      <div className="w-1/2 p-8 mt-16 mx-auto"  style={{ position: "relative", left: '-10%', marginTop: '-400px', marginLeft: '20%' }}  >
      
        <h2 className="text-center uppercase  text-black font-inter text-4xl ml-100 "><span className="text-[#7F56D9]">S</span>
        ubjects</h2>
        <p className="text-gray-700 mt-4  font-inter ">
          <span className="text-[#7F56D9] text-2xl">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          
        </p>
      </div>
      <div style={{ position: "relative", left: ' -20%', marginTop: '-500px' }} >
               <Backgroundcircles/>
             </div>
      
      {isTileOpen && (
                  <div className=" mt-10 rounded-fullxl fixed  border shadow-2xl   bg-[#e8f1f2] scroll" style={{ top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                width: '1000px', height: '550px', overflowY: 'auto'  }}>
                  <button 
                      className="mt-4 ml-3 text-md font-bold py-2 px-4  border border-black rounded text-[#7F56D9] " 
                      onClick={() => setIsTileOpen(false)}
                    >
                      Back
                    </button>
                  <ul className="list-none p-8 mx-4 h-860 w-1440 "  style={{ width: 140 }}>
                      {data.map((item, index) => (
                        <li key={index} className=" ml-10 text-centre mt-6 h-32 text-center max-w-full my-8 rounded-xl border
                         border-black flex items-center"style={{ minWidth: "800px" }}>
                          <h3 className="text-xl text-[#7F56D9] ml-10 space-y-10 font-inter font-bold">{item.title}</h3>
                        </li>
                      ))}
                    </ul>
                  <div className="p-8"> 
                               
                    
                  </div>
                </div>
                )}
     
             
      
    </motion.div>
    </div>
  );
};


export default Subjects;
