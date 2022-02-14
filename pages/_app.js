import Navbar from "../components/Navbar/Navbar"
import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"
import { useEffect, useState } from "react"

//styles
import { GlobalStyle, darkTheme, lightTheme } from "../STYLES/styleGlobal"

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(null)


  useEffect(() => {
    setDarkMode(
      window.localStorage.getItem("memDarkMode") === "false"
    )

  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Layout darkMode={darkMode} setDarkMode={setDarkMode} >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App