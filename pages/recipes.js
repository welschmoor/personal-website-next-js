import Head from "next/head"
import styled from "styled-components"

import { Hometitle, ProjectTitle } from "../STYLES/styleText"
import { GiShinyApple, GiPowder, GiPotionOfMadness, GiPouringPot } from "react-icons/gi"


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
          <li>300ml (4g of Maggie powder)</li>
          <li>15g </li>
          <li>1 pinch </li>
          <li>25g (15g if Mustard is hot)</li>
          <li>2 table spoons</li>
          <li>3 table spoons</li>
          <li>100g finely chopped</li>
        </IngredientsGrams>
        <IconColumn>
          <PowderIcon />
          <BottleIcon />
          <PotIcon />
        </IconColumn>
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

const IconColumn = styled.div`
  position: relative;
  @media (max-width: 736px) {
    display: none;
  }
`

const BottleIcon = styled(GiPotionOfMadness)`
  top: 100px;
  left: 170px;
  position: absolute;
  font-size: 5rem;
  color: ${p => p.theme.ICON.cogwheel};
  transition: transform 0.3s;

  &:active {
    transform: rotate(-30deg);
  }
`

const PotIcon = styled(GiPouringPot)`
  top: 40px;
  left: 26px;
  position: absolute;
  font-size: 7rem;
  color: ${p => p.theme.ICON.cogwheel};

  transition: transform 0.3s;
  transform: rotate(-3deg);
  &:active {
    transform: rotate(21deg);
  }
`

const PowderIcon = styled(GiPowder)`
  top: 140px;
  left: 100px;
  position: absolute;
  font-size: 5rem;
  color: ${p => p.theme.ICON.cogwheel};
`

const RecipeName = styled(ProjectTitle)`
  margin-top: 40px;
  color: ${p => p.theme.TEXT.mainNav};
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
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  color: ${p => p.theme.TEXT.mainNav};
`

const P = styled.p`
  color: ${p => p.theme.TEXT.mainNav};

  margin-top: 30px;
  margin-bottom: 10px;
`

const IngredientsGRID = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr 1fr;

  @media (max-width: 736px) {
    grid-template-columns: 190px 1fr;
  }
`

export default Recipes