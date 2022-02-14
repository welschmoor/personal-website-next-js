
import Link from "next/link"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import { GiCogLock } from "react-icons/gi"
import { useState } from "react"



const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpened, setMenuOpened] = useState(true)
  console.log(darkMode)
  const openCloseMenu = () => {
    console.log(menuOpened)
    setMenuOpened(p => !p)
  }
  const darkModeHandler = () => {
    console.log("dm clicked")
    setDarkMode(p => !p)
    localStorage.setItem("memDarkMode", darkMode)
  }

  return (
    <HeaderDiv>
      <MenuIcon menuOpened={menuOpened} onClick={openCloseMenu} />
      <MenuIconMask />
      <Menu menuOpened={menuOpened} onClick={darkModeHandler} >{darkMode ? "dark mode" : "light mode"}</Menu>
      <Menu2 menuOpened={menuOpened} >click me</Menu2>
      <Menu3 menuOpened={menuOpened} >logout</Menu3>
      <Link href="/" passHref>
        <JumpingTitle>
          <H1>J</H1>
          <H1>o</H1>
          <H1>h</H1>
          <H1>a</H1>
          <H1>n</H1>
          <H1>n</H1>
          <H1>e</H1>
          <H1>s</H1>
          <H1>&nbsp;</H1>
          <H1>W</H1>
          <H1>e</H1>
          <H1>l</H1>
          <H1>s</H1>
          <H1>c</H1>
          <H1>h</H1>
        </JumpingTitle>
      </Link>
      <Navbar />
    </HeaderDiv>
  )
}

const MenuIcon = styled(GiCogLock)`
  color: ${p => p.theme.ICON.cogwheel};
  
  cursor: pointer;
  font-size: 3rem;
  position: absolute;
  top: -2px;
  left: -1px;
  transition: 0.2s;
  transform: ${p => p.menuOpened && "rotate(-70deg)"};
  z-index: 3;
  /* &:active {
    transform: rotate(40deg);
  } */
`

const MenuIconMask = styled.div`
  background-color: ${p => p.theme.BG.col1};
  padding: 27px;
  cursor: pointer;
  position: absolute;
  top: -2px;
  left: -1px;
  transition: 0.2s;
  /* transform: ${p => p.menuOpened && "rotate(-50deg)"}; */
  z-index: 2;
  /* &:active {
    transform: rotate(40deg);
  } */
`

const Menu = styled.div`
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  color: ${p => p.theme.TEXT.fadedText2};
  z-index: 1;
  top: -2px;
  left: -1px;
  position: absolute;
  transition: transform 0.2s;
  /* transition-delay: ${p => !p.menuOpened ? "0.1s" : "0.0s"}; */
  transform: ${p => !p.menuOpened ? "translate(90px, 18px)" : "translate(-200px, 18px)"};
  cursor: pointer;
`

const Menu2 = styled(Menu)`
  /* transition-delay: ${p => !p.menuOpened ? "0.5s" : "0"}; */
  transform: ${p => !p.menuOpened ? "translate(232px, 18px)" : "translate(-200px, 18px)"};
  cursor: pointer;
`

const Menu3 = styled(Menu)`
  /* transition-delay: ${p => !p.menuOpened ? "1s" : "0"}; */
  transform: ${p => !p.menuOpened ? "translate(350px, 18px)" : "translate(-200px, 18px)"};
  cursor: pointer;
`



const HeaderDiv = styled.header`
  max-width: 900px;
  display: grid;
  grid-template-columns: 360px 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 50px 80px;
  padding-bottom: 20px;
  height: 190px;
  transition: ${p => p.theme.TIME.zero2};

  @media (max-width: 736px) {
    grid-template-columns: 1fr;
    padding: 30px;
  }
`

const JumpingTitle = styled.div`
    margin-left: 0px;
    display: grid;
    gap: -3px;
    grid-template-columns: repeat(15, 1fr);
    justify-content: start;
    align-content: center;
    align-items: center;
    justify-items: center;
    height: 100px;
    width: 240px;
    cursor: pointer;

    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    @media (max-width: 736px) {
      justify-content: start;
      align-content: center;
      align-items: end;
      justify-items: start;
  }
`

const H1 = styled.h1`
    height: 53px;
    align-self: center;
    border: 1 solid transparent;
    transition: height ${p => p.theme.TIME.zero2};
    color: ${p => p.theme.TEXT.mainNav};
    font-size: 38px;
    font-weight: 700;
    font-family: century;

    &:hover {
      height: 82px;
    }
`

export default Header