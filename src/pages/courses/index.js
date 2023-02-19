import Link from "next/link"
import axios from "axios";
import { motion } from "framer-motion";
import Backgroundcircles from "components/Backgroundcircles";
import Image from "next/image";
import Navbar from "components/Navbar";

// some constants for animations
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

function Courses({ courses }) {
    return (
      <>
      <Navbar />
      <motion.div className="flex items-center bg-[#e8f1f2]"  style={{ position: "relative" }}> 
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
        filter: "blur(3px)"}}>
      </div>
        
      
        
        <ul className="list-none p-8 mt-5" style={{ width: 1000, position: "relative", zIndex: 1 }}>
        <motion.div variants={stagger} >
            {
                courses.map(course => (
                    <Link key={course.id} href={`/courses/${course.id}`}>
                      <li key={course.id} className={` w-42 max-w-auto shadow-2xl bg-[#FFFFFF] opacity-80 rounded-lg my-8 flex items-center`} 
                      style={{Width: "200px",height:'150px' }}>
                        <div className="flex-1 items-center mr-40 ml-80 ">
                          <h3 className="text-2xl space-y-10  font-bold ">{course.name}</h3>
                        </div>
                      </li>
                    </Link>
                ))
            }
        </motion.div>
        </ul>
        {/* <div style={{ position: "relative", left: '20%', marginTop: '-500px' }} >
        <Backgroundcircles/>
      </div> */}
      
      <div className=" w-1/2 p-8 mt-16 mx-auto" style={{ position: "relative", left: '-2%', marginTop: '-500px' }}>
      
        <h2 className="text-center uppercase tracking-[1px] font-red text-4xl mr-100"><span className="text-[#7F56D9] text-5xl ">C</span>
        <span className=" ">ourses</span></h2>  
        <p className="text-gray-700 mt-4 text-justify ">
          <span className="text-[#7F56D9] text-2xl">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          
        </p>
      </div>
      </motion.div>

      </>
    )
  }

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

export default Courses