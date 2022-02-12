import Navbar from "./Navbar/Navbar"
import Header from "./Header/Header"

//styles
import styled from "styled-components"



const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutContent>
        <Header />
        {children}
      </LayoutContent>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  background-color: ${p => p.theme.BG.col1};
  min-height: 100vh;
`

const LayoutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export default Layout