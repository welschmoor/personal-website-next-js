import styled from "styled-components";


export const Hometitle = styled.h1`
  color: #524949;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 30px;
  font-weight: 600;
  color: ${p => p.theme.TEXT.mainNav};
`

export const HometitleCentered = styled(Hometitle)`
  text-align: center;
  cursor: pointer;

`

export const ProjectTitle = styled.h2`
color: #524949;

font-size: 30px;
font-weight: 600;
font-size: 1rem;
`