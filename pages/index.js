
import Head from "next/head"
import Link from "next/link"

//styles
import styled from "styled-components"
import { Hometitle, HometitleCentered } from "../STYLES/styleText"

import Aside from "../components/Aside/Aside"


const Homepage = () => {
  return (
    <HomeGrid>
      <Head><title>Johannes Welsch - Homepage</title></Head>
      <section>
        <Hometitle>Welcome to my personal Website!</Hometitle>
        <P>You will find a lot of crap on this site. Food recipies, not some crap copied from the internet, these are my personal recipies that taste like heaven.</P>
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
  line-height: 1.5;
  color: ${p => p.theme.TEXT.mainNav};
`

const Text = styled.div`
  font-size: 1rem;
`



export default Homepage