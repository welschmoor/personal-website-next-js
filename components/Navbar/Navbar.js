
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"


const Navbar = () => {
  const router = useRouter()
  console.log(router)
  return (
    <Nav>
      <Link href="/recipes" passHref><A>Recipes</A></Link>
      <Link href="/projects" passHref><A>Projects</A></Link>
      <Link href="/about" passHref><A>About</A></Link>
    </Nav>
  )
}


const A = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.TEXT.mainNav};
  font-weight: 700;
  cursor: pointer;

  border-bottom: 3px solid transparent;
  padding: 10px 0;
  transition: padding ${p => p.theme.TIME.zero2};;

  &:hover {
    padding: 4px 0;
    border-bottom: 3px solid #7a7875;
  }

  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

const Nav = styled.nav`
  margin-right: 0px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 25px;

  @media (max-width: 808px) {

    justify-content: center;
  }
`

export default Navbar