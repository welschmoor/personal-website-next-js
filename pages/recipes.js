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
      <RecipeName>Bavarian Potato Salad</RecipeName>

      <P>Ingredients</P>

      <IngredientsGRID>
        <IngredientsUL>
          <li>Potatoes</li>
          <li>Salt</li>
          <li>Beef broth</li>
          <li>Zucker</li>
          <li>Pepper</li>
          <li>Mustard</li>
          <li>Vinegar (6%)</li>
          <li>Sunflower oil</li>
          <li>Zwiebel</li>
        </IngredientsUL>
        <IngredientsGrams>
          <li>1kg</li>
          <li>10g</li>
          <li>300ml (I take Maggie powder)</li>
          <li>15g </li>
          <li>1 pinch </li>
          <li>25g (15g if Mustard is hot)</li>
          <li>2 table spoons</li>
          <li>3 table spoons</li>
          <li>50g finely chopped</li>
          
        </IngredientsGrams>
      </IngredientsGRID>
      <P>Directions</P>
      <p>
        Cook the unpeeled potatoes for ~35 minutes if they are waxy and 25 if they are starchy. 
        After that, peel them and cut in thin disks. 
        Take 300ml of water in a sauce pan, add beef broth powder, 
        salt, sugar, mustard, oil, onion, pepper and cook on stove until boil. Then add vinegar and pour the broth 
        on to cut potatoes. Goes well with roasted chicken.
      </p>
    </RecipesWrapper>
  )
}

const RecipeName = styled(ProjectTitle)`
  margin-top: 40px;
`

const IngredientsUL = styled.ul`
  padding-left: 20px;
  border-left: 1px solid grey;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const IngredientsGrams = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

`

const AppleIcon = styled(GiShinyApple)`
  display: flex;
  margin: 0 auto;
  transform: translateX(2px);
  font-size: 3rem;
  color: ${p => p.theme.ICON.cogwheel};

  transition: transform 0.1s;
  &:active {
    transform: scale(1.3);
  }
`

const RecipesWrapper = styled.div`
  color: ${p => p.theme.TEXT.mainNav};
`

const RecipesTitle = styled(Hometitle)`
  margin-top: 10px;
  position: relative;
  text-align: center;
  cursor: default;
`

const P = styled.p`
  color: ${p => p.theme.TEXT.mainNav};

  margin-top: 30px;
  margin-bottom: 10px;
`

const IngredientsGRID = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr;
`

export default Recipes