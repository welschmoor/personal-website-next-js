import Navbar from "./Navbar/Navbar"

//styles
import styled from "styled-components"



const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  background-color: ${p => p.theme.BG.col1};
  min-height: 100vh;
`

export default Layout