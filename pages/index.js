
import Head from "next/head"
import Link from "next/link"

//styles
import styled from "styled-components"
import { Hometitle, HometitleCentered } from "../STYLES/styleText"

import Aside from "../components/Aside/Aside"


const Hopepage = () => {


  return (
    <HomeGrid>
      <Head><title>Johannes Welsch!</title></Head>
      <section>
        <Hometitle>Welcome to my personal Website!</Hometitle>
        <P>You will find a lot of crap on this site. Food recipies, not some crap copied from the internet, these are my personal recipies that taste like heaven. In fact one cake is called God's food that I make each year on my birthday.</P>
      </section>
      <Aside />
    </HomeGrid>
  )
}

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;

  @media (max-width: 808px) {
    grid-template-columns: 1fr;

  }
`

const P = styled.p`
  
`

const Text = styled.div`
  font-size: 1rem;
`



export default Hopepage