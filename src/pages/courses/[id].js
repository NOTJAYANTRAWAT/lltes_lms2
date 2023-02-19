import { useState } from "react"
import Link from "next/link"
import axios from "axios"
import Navbar from "components/Navbar"
import { motion } from "framer-motion"
import Backgroundcircles from "components/Backgroundcircles"
function Subjects({ subjects, chapters, id }) {

  const [isOpen, setOpen] = useState(false)
  const [chaptersList, setChapters] = useState([])
  // function to toggle chapters menu
  function toggleMenu (name) {
    let cList = []
    for(var i = 0; i < chapters.length; i++){
      var chapObj = chapters[i]
      if(chapters[i].fullname === name){
        cList.push(
          {
            lid: chapObj.lid,
            lesson: chapObj.lesson
          }
        )
      }
    }

    setChapters(cList)
    setOpen(!isOpen)

  };

    return (
      <>
      <Navbar />
      <div className="bg-[#e8f1f2] h-screen">
        <div className="mt-10 " style={{
              position: "absolute",
              left:50,
              right:100,
              top:30,
              bottom: 0,
              backgroundImage: `url('/subject_bg.png')`,
              
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              height: "120%",
              width:" 90%",
              filter: "blur(5px)"
              
            }}></div>

        
        
        <motion.div className=" flex items-center snap-mandatory snap-y ">
        <ul ul className=" list-none p-8  mt-5"style={{ width:2000 }} >
            {
                subjects.map(subject => (
                    <li 
                      key={subject.id} 
                      onClick={() => toggleMenu(subject.fullname)} 
                      className={` w-42 max-w-auto bg-[#Ffffff] shadow-2xl opacity-80 rounded-lg my-8 flex items-center`}
                       style = {{Width:"500px", height:"150px"}}>
                        <div className="flex-1 items-center mr-40 ml-80 justify-center ">
                         <h3 className="text-2xl space-y-10  font-bold font-inter ">{subject.fullname}</h3>
                       </div>
                    </li>
                ))
            }
        
        </ul>

        <div className="w-1/2 p-8 mt-16 mx-auto"  style={{ position: "relative", left: '-10%', marginTop: '-100px', marginLeft: '10%' }}  >
          <h2 className="text-center  font-display text-4xl ml-100 "><span className="text-[#7F56D9] text-5xl uppercase">S</span>
          ubjects</h2>
          <p className="text-gray-700 mt-4  font-inter ">
            <span className="text-[#7F56D9] font-bold text-2xl">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            
          </p>
        </div>
        <div style={{ position: "relative", left: ' -40%', marginTop: '-300px' }} >
               <Backgroundcircles/>
             </div>
        
        {
          isOpen ?
          
           (
            <div className=" mt-10 rounded-xl fixed  border shadow-2xl shadow-transparent  bg-[#e8f1f2] scroll
            scrollbar-thin scrollbar-track-[#e8f1f2] scrollbar-thumb-[#7F56D9]
            " style={{ top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          width: '1000px', height: '550px', overflowY: 'auto'  }}>
            <button 
                className="mt-4 ml-3 text-md font-bold py-2 px-4  border border-black rounded text-[#7F56D9] " 
                onClick={() => setOpen(false)}
              >
                Back
              </button>
              
            <ul className="list-none p-8   mx-4 h-860 w-1440 "  style={{ width: 140 }}>
                {chaptersList.map(chapter => (

                
                  <Link href={`/courses/notes/${chapter.lid}`} key={chapter.lid}>
                    <motion.div whileHover={{ scale: 1.1 }}>
                    <li key={chapter.lid} className=" ml-10 text-centre mt-6 opacity-90 h-32 text-center max-w-full my-8 rounded-xl border
                    border-black flex items-center"style={{ minWidth: "800px" }}>
                      
                      <h3 className="text-xl text-[#7F56D9] ml-10 space-y-10 font-inter font-bold">{chapter.lesson}</h3>
                      
                    </li>
                    </motion.div>
                  </Link>
                  
                ))}
              </ul>
              
            <div className="p-8"> 
                         
              
            </div>
          </div>
          )

          : <div></div>

       

          // <ul>
          //     {
          //         chaptersList.map(chapter => (
          //             <Link href={`/courses/notes/${chapter.lid}`} key={chapter.lid}> <li key={chapter.lid}> {chapter.lesson} </li> </Link>
          //         ))
          //     }
              
          // </ul> : <h1></h1>
        }
      </motion.div>

      </div>
      </>
    )
  }
  
export async function getServerSideProps(context){
  const { params } = context
  try {
    // fetching subjects
    const response1 = await axios.post(
      'https://back-test1.azurewebsites.net/api/getSubjects?code=CYWS96AEDHVQVpiBZmTPxixtJKG-SNrASLbzXSAin-FHAzFumR8d_A==',
      {category: params.id}
      )
    const subjects = await response1.data
    
    // fetching chapters
    const response2 = await axios.post(
      'https://back-test1.azurewebsites.net/api/getChapters?code=OARRzSHGPONMAtYSvkNmccQQFa7WhSEhHW41cdQGjtthAzFuEmjq9A==',
      {id: params.id}
      )
    const chapters = await response2.data

    return {
      props: {
        subjects: subjects,
        chapters: chapters,
        id: params.id
      }
    }
  } catch (error) {
    return {
      props: {
        subjects: error,
        chapters: error,
        id: params.id
      }
    }    
  }
}

export default Subjects