

import Navbar from "../components/Navbar/Navbar.js"
import styled from "styled-components"


const About = () => {
  return (
    <AboutText>
      Hello, my this is my personal website. Here you will find links to my GitHub, maybe some news, and also a link to my articles on Dev.to
    </AboutText>
  )
}

const AboutText = styled.p`
 color: ${p => p.theme.TEXT.mainNav};
`

export default About