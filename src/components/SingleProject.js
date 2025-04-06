import React from 'react';
import styled from 'styled-components';
import ViewCode from 'icons/View-Code-Button.svg'
import ViewCodeHover from 'icons/View-Code-Button-Hover.svg'
import LiveDemo from 'icons/Live-Demo-Button.svg'
import LiveDemoHover from 'icons/Live-Demo-Button-Hover.svg'

const SingleProject = (
  { img, title, description, techLanguages, githubLink, deployedLink }
) => {
  return (
    <ProjectWrapper lang="en-US">
      <ImageWrapper aria-hidden="true">
        <ProjectImage src={img} alt="" />
      </ImageWrapper>
      <ProjectInfo aria-label="Information about the project">
        <ProjectTitle lang="en">{title}</ProjectTitle>
        <ProjectDescription lang="en">{description}</ProjectDescription>
        <ProjectLanguages lang="en" aria-label="Coding languages used in this project">
          {techLanguages}
        </ProjectLanguages>
        <ViewCodeButton
          // btnColor="#EB5577"
          lang="en"
          type="button"
          title="Link to project on Github"
          onClick={() => window.open(`https://github.com/fridanordenlow/${githubLink}`)} />
        <LiveDemoButton
          // btnColor="#0B24F5"
          lang="en"
          type="button"
          title="Link to deployed project on Netlify"
          // onClick={() => window.open(`https://${deployedLink}.netlify.app/`)}
          onClick={() => window.open(`${deployedLink}`)} />
      </ProjectInfo>
    </ProjectWrapper>
  )
};
export default SingleProject;

const ProjectWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

  @media (min-width: 850px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  aspect-ratio: 4 / 3;
  overflow: hidden;

  @media (min-width: 850px) {
    width: 40%;
  }
`;

const ProjectImage = styled.img`
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
    display: block;
`;

const ProjectInfo = styled.div`
  @media (min-width: 850px) {
    width: 60%;
  }
`;

const ProjectTitle = styled.h3`
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 43px;
    color: #000000;
    @media (min-width: 667px) {
       font-size: 32px;
  }
`;

const ProjectDescription = styled.p`
    font-family: 'EB Garamond';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 1rem;

    @media (min-width: 667px) {
       font-size: 22px;
       line-height: 28px;
    }
`;

const ProjectLanguages = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 5px;
    margin-bottom: 1rem;
`;

const ViewCodeButton = styled.button`
    width: 160px; 
    height: 38px;
    background-image: url(${ViewCode});
    background-size: cover; 
    background-position: center; 
    background-color: white;
    border: none;

    &:hover {
    background-image: url(${ViewCodeHover});
  }

  @media (min-width: 1024px) {
    width: 200px; 
    height: 48px;
  }
`

const LiveDemoButton = styled.button`
    width: 130px; 
    height: 38px;
    background-image: url(${LiveDemo});
    background-size: cover; 
    background-position: center;
    background-color: white;
    border: none;
    margin-left: 20px;

    &:hover {
        background-image: url(${LiveDemoHover});
  }

  @media (min-width: 1024px) {
    width: 164px; 
    height: 48px;
  }
`