import Head from "next/head"
import styled from "styled-components"

import { Hometitle, ProjectTitle } from "../STYLES/styleText"



const Recipes = () => {
  return (
    <RecipesWrapper>
      <Head><title>Johannes Welsch - Recipes</title></Head>
      <RecipesTitle>Recipies </RecipesTitle>- under construction 13. Feb. 2022
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



const RecipesWrapper = styled.div`
  
`

const RecipesTitle = styled(Hometitle)`
  text-align: center;
  cursor: default;
`

export default Recipes