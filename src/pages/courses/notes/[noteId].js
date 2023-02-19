import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/router"

function Notes({ lessons }) {

  const router = useRouter()
  const lid = 0

  console.log(lessons)

    return(
      <>
        <div key={lessons[lid].lid} dangerouslySetInnerHTML={{ __html: lessons[lid].contents }} />
      </>
    )
  }

export async function getServerSideProps(context){
  const { params } = context

  try {
    const response = await axios.post(
      "https://back-test1.azurewebsites.net/api/getLesson?code=ozBG20jiEQGcV_BWUqBysnPkr4sonuhulA2UvwA4Lv6KAzFuQXUAgg==",
      {lessoncid: params.noteId}
      )
    const lessons = await response.data

    return {
      props: {
        lessons: lessons
      }
    }
  } catch (error) {
    return {
      props: {
        lessons: error
      }
    }
  }
}

export default Notes