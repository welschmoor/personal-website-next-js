
import styled from "styled-components"
import Link from "next/link"
import { Hometitle, HometitleCentered } from "../../STYLES/styleText"


const Aside = () => {
  return (
    <AsideWrapper>
      <Link href="/books" passHref><HometitleCentered>Recommended<br /> Books</HometitleCentered></Link>
      <AsideContent >


        <p>Here is a list of some of the best books ever written:</p>
        <UL>
          <li>
            <BookTitle>Neue Reise um die Welt</BookTitle>
            <Author>by Otto von Kotzebue</Author>
          </li>
          <li>
            <BookTitle>Animal Farm</BookTitle>
            <Author>by George Orwell</Author>
          </li>
          <li>
            <BookTitle>Roadside Picnic</BookTitle>
            <Author>by Strugatsky Brothers</Author>
          </li>
        </UL>
      </AsideContent>
    </AsideWrapper>
  )
}


const AsideWrapper = styled.aside`
  /* background-color:${p => p.theme.BG.col2}; */
  /* border-top: 6px solid grey; */
  /* border-bottom: 6px solid grey;*/
  /* border-left: 2px solid ${p => p.theme.MISC.separator};  */
  border-left: 2px solid ${p => p.theme.MISC.separator2}; 
  /* border-right: 12px solid grey; */
  padding-bottom: 30px; 
  margin-top: 30px;

  @media (max-width: 808px) {
    border-left: none; 

  }
`

const UL = styled.ul`
  list-style: disc;
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const AsideContent = styled.div`
  padding-left: 20px;
`

const BookTitle = styled.h5`
  color: #1098ad;
  font-weight: 600;
`

const Author = styled.p`
  font-size: 18px;


`
export default Aside