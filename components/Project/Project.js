
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { Hometitle } from "../../STYLES/styleText"

const Project = ({ e }) => {
  console.log('e', e)
  return (
    <ProjectWrapper>
      <ProjectTitle>
        {e.title}
      </ProjectTitle>
      {e.imgURL && <Image src={e.imgURL} alt="e.title" width={e.imgURL.width} height={e.imgURL.height} objectFit="cover" />}
      <Description>{e.description}</Description>
      <ProjectLink target="_blank" rel="noopener noreferrer" href={e.link}>link: <LinkSpan>{e.link}</LinkSpan></ProjectLink>
      {e.mirror && <ProjectLink>mirror: <LinkSpan>{e.mirror}</LinkSpan></ProjectLink>}
    </ProjectWrapper>
  )
}



const ProjectWrapper = styled.div`
  
`

const ProjectTitle = styled.h2`
  color: #524949;

  font-size: 30px;
  font-weight: 600;
  font-size: 1rem;
`

const Description = styled.p`
   font-size: 0.91rem;
   font-weight: normal;
   padding: 10px 0;
`

const ProjectLink = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.91rem;
  font-weight: normal;
  color: ${p => p.theme.TEXT.col1};
`

const LinkSpan = styled.span`

  &:hover {
    border-bottom: 2px solid rgb(163, 163, 207);
  }
`

export default Project