import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <Link href="/courses">view courses</Link>
    </>
  )
}
