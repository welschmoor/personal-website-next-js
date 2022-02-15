
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"


const Navbar = () => {
  const router = useRouter()
  console.log('router', router)
  const path = router.pathname

  return (
    <Nav>
      <Link href="/recipes" passHref><A><FatDot path={path} />Recipes</A></Link>
      <Link href="/projects" passHref><A>Projects</A></Link>
      <Link href="/about" passHref><A>About</A></Link>
    </Nav>
  )
}


const A = styled.a`
  position: relative;

  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.TEXT.mainNav};
  font-weight: 700;
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 3px solid transparent;
  padding-bottom: 10px;
  transition: padding ${p => p.theme.TIME.zero2};;

  &:hover {
    padding-bottom: 5px;

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
  /* align-items: center; */
  justify-content: end;
  gap: 25px;

  @media (max-width: 808px) {

    justify-content: center;
  }
`

const FatDot = styled.div`
  display:  ${p => p.path === "/" ? "none" : "normal"};
  top: -18px;
  left: ${p => p.path === "/recipes" 
  ? "30px" 
  : p.path === "/projects" ? "138px" : "243px"
  };
  position: absolute;
  padding: 7px;
  border-radius: 50%;
  /* background-color: ${p => p.theme.TEXT.mainNav}; */
  border: 3px solid ${p => p.theme.TEXT.mainNav};


`

export default Navbar