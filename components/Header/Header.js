
import Link from "next/link"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <HeaderDiv>
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

const HeaderDiv = styled.header`
  max-width: 900px;
  display: grid;
  grid-template-columns: 360px 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  padding-bottom: 20px;
  height: 190px;
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
    /* height: 240px; */
    width: 240px;
    cursor: pointer;
`

const H1 = styled.h1`
    height: 53px;
    align-self: center;
    border: 1 solid transparent;
    transition: height 0.2s;
    color: #524949;
    font-size: 38px;
    font-weight: 700;
    font-family: century;

    &:hover {
      height: 82px;
    }
`

export default Header