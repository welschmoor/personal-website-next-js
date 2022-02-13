

import styled from "styled-components"
import { Hometitle } from "../STYLES/styleText"
import Project from "../components/Project/Project"

//images
import YTClonePictureForGithub from "../static/YTClonePictureForGithub.jpg"
import ExpenseTracker from "../static/ExpenseTracker.jpg"
import memoryReact from "../static/memoryReact.jpg"
import instapound from "../static/instapound.jpg"


const projects = [
  { id: 1, imgURL: instapound, title: "Instagram Clone", description: "Sign up, follow users, like and comment on posts! Fullstack. Backend Express Apollo GraphQL, Prisma, Postgres, React. See a video overview here: ", link: "https://instopound.herokuapp.com", mirror: "" },
  { id: 2, imgURL: YTClonePictureForGithub, title: "YouTube Clone", description: "Schöner Clone mit Styled Components", link: "https://fir-610f8.web.app", mirror: "" },
  { id: 3, imgURL: memoryReact, title: "Memory Game", description: "A simple memory game. Find 3 matching numbers!", link: "https://flamboyant-ardinghelli-549e43.netlify.app", mirror: "" },
  { id: 4, imgURL: ExpenseTracker, title: "Expense Tracker", description: "A simple App with React and D3.", link: "https://expense-tracker-c6eb2.web.app", mirror: "https://nervous-banach-a18feb.netlify.app" },
]


const Projects = () => {
  return (
    <ProjectsWrapper>
      <HomeTitleCentered>Projects</HomeTitleCentered>
      <ProjectsMap>
        {projects.map(e => {
          return (
            <Project e={e} key={e.id} />
          )
        })}
      </ProjectsMap>
    </ProjectsWrapper>)
}

const HomeTitleCentered = styled(Hometitle)`
  text-align: center;
`

const ProjectsWrapper = styled.div`
  /* background-color: ${p => p.theme.BG.col2}; */
  min-height: 69vh;
`

const ProjectsMap = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  gap: 77px;
`

export default Projects