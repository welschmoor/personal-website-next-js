import Navbar from "./Navbar/Navbar"
import Header from "./Header/Header"
import { useState } from 'react'


//styles
import styled from "styled-components"
import Footer from "./Footer/Footer"


const Layout = ({ children, darkMode, setDarkMode }) => {
  return (
    <LayoutWrapper>
      <LayoutContent>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main>
          {children}
        </Main>
        <Footer />
      </LayoutContent>
    </LayoutWrapper>
  )
}


const LayoutWrapper = styled.div`
  transition: ${p => p.theme.TIME.zero2};
  background-color: ${p => p.theme.BG.col1};
  min-height: 100vh;
`

const LayoutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Main = styled.main`
  transition: ${p => p.theme.TIME.zero2};

  margin-left: ${p => p.theme.MARGIN.mar20};
  margin-right: ${p => p.theme.MARGIN.mar20};

  @media (max-width: 736px) {
    margin-left: ${p => p.theme.MARGIN.mar10};
    margin-right: ${p => p.theme.MARGIN.mar10};
  }
`

export default Layout