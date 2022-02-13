import styled from "styled-components"




const Footer = () => {
  return (
    <FooterDiv>
      Footer!!!
    </FooterDiv>
  )
}


const FooterDiv = styled.footer`
  transition: ${p => p.theme.TIME.zero2};
  margin-left: ${p => p.theme.MARGIN.mar20};
  margin-right: ${p => p.theme.MARGIN.mar20};

  @media (max-width: 736px) {
    margin-left: ${p => p.theme.MARGIN.mar10};
    margin-right: ${p => p.theme.MARGIN.mar10};
  }
`

export default Footer