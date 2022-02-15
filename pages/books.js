
// I don't use a backend, that's why I use an array here.

import Head from "next/head"
import styled from "styled-components"


const Books = () => {
  return (
    <BooksWrapper>
      <Head><title>Johannes Welsch - Books</title></Head>
      <P>List of books I've read in the last years</P>
      <P> - under construction 13. Feb. 2022</P>
    </BooksWrapper>
  )
}

const BooksWrapper = styled.div`
  color: ${p => p.theme.TEXT.mainNav};
`

const P = styled.p`
color: ${p => p.theme.TEXT.mainNav};
`

export default Books