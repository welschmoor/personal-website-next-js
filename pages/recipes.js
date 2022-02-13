import Head from "next/head"
import styled from "styled-components"

import { Hometitle, ProjectTitle } from "../STYLES/styleText"
import { GiShinyApple } from "react-icons/gi"


const Recipes = () => {
  return (
    <RecipesWrapper>
      <Head><title>Johannes Welsch - Recipes</title></Head>
      <AppleIcon />
      <RecipesTitle>Recipies</RecipesTitle>
      <ProjectTitle>Bavarian Potato Salad</ProjectTitle>
      <p>Ingredients</p>
      <ul>
        <li>Potatoes</li>
      </ul>
      <ul>
        <li>Salt:</li>
      </ul>
      Directions:
      <p></p>
    </RecipesWrapper>
  )
}

const AppleIcon = styled(GiShinyApple)`
  display: flex;
  margin: 0 auto;
  
  font-size: 3rem;
  color: ${p => p.theme.ICON.cogwheel};

  transition: transform 0.1s;
  &:active {
    transform: scale(1.3);
  }
`

const RecipesWrapper = styled.div`
  
`

const RecipesTitle = styled(Hometitle)`
  margin-top: 10px;
  position: relative;
  text-align: center;
  cursor: default;
`

export default Recipes