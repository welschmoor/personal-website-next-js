import Link from "next/link"
import styled from "styled-components"

import { GiEarthAmerica, GiWheat, GiCompass } from "react-icons/gi"


const Footer = () => {
  const todaysDate = new Date()
  const year = todaysDate.getFullYear()

  return (
    <>
      <FooterDiv>
        <Left>
          <FooterTitle>LINKS <EarthIcon /></FooterTitle>
          <UL>
            <li><A href="https://github.com/welschmoor" target="_blank" >GitHub</A></li>
            <li><A href="https://dev.to/welschmoor/" target="_blank" >Dev.to</A></li>
          </UL>
        </Left>
        <Right>
          <FooterTitle>NAVIGATION <NavIcon /></FooterTitle>
          <UL>
            <li><Link href="/recipes" passHref><A>Recipes</A></Link></li>
            <li><Link href="/projects" passHref><A>Projects</A></Link></li>
  
          </UL>
        </Right>
        <WheatIcon />
      </FooterDiv>
      <Copyright>
        ©Copyleft {year}. All lefts reserved.
      </Copyright>
    </>
  )
}


const WheatIcon = styled(GiWheat)`
  font-size: 7rem;
  color: ${p => p.theme.ICON.wheat};
  transform: translateY(90px);
  display: block;
`

const EarthIcon = styled(GiEarthAmerica)`
  font-size: 1rem;
  color: ${p => p.theme.ICON.earth};
  display: inline-block;
  transform: translateY(2px);
`

const NavIcon = styled(GiCompass)`
  font-size: 1.05rem;
  color: ${p => p.theme.ICON.earth};
  display: inline-block;
  transform: translateY(1px);
`

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Left = styled.div`
  
`
const Right = styled.div`
  
`

const Copyright = styled.div`
  font-size: 0.8rem;
  color: ${p => p.theme.TEXT.fadedText};
  margin-left: ${p => p.theme.MARGIN.mar20};
  margin-right: ${p => p.theme.MARGIN.mar20};

  @media (max-width: 736px) {
    margin-left: ${p => p.theme.MARGIN.mar10};
    margin-right: ${p => p.theme.MARGIN.mar10};
  }
`

const A = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  color: ${p => p.theme.TEXT.fadedText};
  &:hover {
    text-decoration: underline;
  }
`

const FooterTitle = styled.h2`
  color: ${p => p.theme.TEXT.mainNav};
  margin-bottom: 20px;
  padding: 6px 0px;

  display: flex;
  gap: 5px;
`

const FooterDiv = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 200px;

  padding-top: 24px;
  padding-bottom: 64px;
  margin-top: 120px;
  border-top: 1px solid ${p => p.theme.MISC.separator};
  transition: ${p => p.theme.TIME.zero2};
  margin-left: ${p => p.theme.MARGIN.mar20};
  margin-right: ${p => p.theme.MARGIN.mar20};

  @media (max-width: 736px) {
    grid-template-columns: 1fr 1fr 150px;
    margin-left: ${p => p.theme.MARGIN.mar10};
    margin-right: ${p => p.theme.MARGIN.mar10};
  }
`

export default Footer