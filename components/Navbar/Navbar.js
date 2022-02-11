
import Link from "next/link"
import { useRouter } from "next/router"


const Navbar = () => {
  const router = useRouter()
  console.log(router)
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}

export default Navbar