
import Navbar from "../components/Navbar/Navbar.js"
import Head from "next/head"
import styled from "styled-components"

const Hopepage = () => {


  return (
    <div>
      <Head ><title>Johannes Welsch!</title></Head>
      <Text>Homepage!</Text>
    </div>
  )
}

const Text = styled.div`
  font-size: 1rem;
  color: #5f5b5b;
`

export default Hopepage