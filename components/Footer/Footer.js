import styled from "styled-components"




const Footer = () => {
  return (
    <FooterDiv>
      Footer!!!
    </FooterDiv>
  )
}


const FooterDiv = styled.footer`
  margin-left: ${p => p.theme.MARGIN.mar10};
  margin-right: ${p => p.theme.MARGIN.mar10};
`

export default Footer