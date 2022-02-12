
import styled from "styled-components"
import Link from "next/link"
import { Hometitle, HometitleCentered } from "../../STYLES/styleText"


const Aside = () => {
  return (
    <AsideWrapper>
      <Link href="/books" passHref><HometitleCentered>Recommended<br /> Books</HometitleCentered></Link>
      <AsideContent >


        <p>Here is a list of some of the best books ever written:</p>
        <ul>
          <li>
            <h6>Neue Reise um die Welt</h6>
            <p>Otto von Kotzebue</p>
          </li>
          <li>
            <h6>Animal Farm</h6>
            <p>George Orwell</p>
          </li>
          <li>
            <h6>Roadside Picnic</h6>
            <p>Strygatsky Brothers</p>
          </li>
        </ul>
      </AsideContent>
    </AsideWrapper>
  )
}

const AsideWrapper = styled.aside`
  background-color: hsl(35, 18.2%, 92.1%);
  border-top: 6px solid grey;
`

const AsideContent = styled.div`
  padding-left: 20px;
`

export default Aside