
import Head from "next/head"
import styled from "styled-components"

const Hopepage = () => {


  return (
    <div>
      <Head ><title>Johannes Welsch!</title></Head>
      <Hometitle>Welcome to my personal Website!</Hometitle>

      <Text>Homepage!</Text>
    </div>
  )
}

const Hometitle = styled.h1`
  color: #524949;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 30px;
  font-weight: 600;
`
const Text = styled.div`
  font-size: 1rem;
`


export default Hopepage