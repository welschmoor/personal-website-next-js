import Navbar from "../components/Navbar/Navbar"
import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"

//styles
import { GlobalStyle, darkTheme, lightTheme } from "../STYLES/styleGlobal"

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App