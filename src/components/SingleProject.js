import React from 'react';
import styled from 'styled-components';

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
        <Button
          btnColor="#EB5577"
          lang="en"
          type="button"
          title="Link to project on Github"
          onClick={() => window.open(`https://github.com/fridanordenlow/${githubLink}`)}>
          <span aria-hidden="true"><i className="fab fa-github" /> </span>
            View code
        </Button>
        <Button
          btnColor="#0B24F5"
          lang="en"
          type="button"
          title="Link to deployed project on Netlify"
          onClick={() => window.open(`https://${deployedLink}.netlify.app/`)}>
          <span aria-hidden="true"><i className="fa-solid fa-globe" /> </span>
            Live demo
        </Button>
      </ProjectInfo>
    </ProjectWrapper>
  )
};
export default SingleProject;

const ProjectWrapper = styled.article`
  margin-top: 24px;

  @media (min-width: 667px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  margin: 24px 24px 24px 0;
`;

const ProjectImage = styled.img`
  @media (min-width: 667px) and (max-width: 1024px) {
    width: 184px;
    height: 280px;
    object-fit: cover;
  }
`;

const ProjectInfo = styled.div``;

const ProjectTitle = styled.h3`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 43px;
  color: #000000;
`;

const ProjectDescription = styled.p`
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #000000;
  margin: 24px 24px 24px 0;

  @media (min-width: 667px) and (max-width: 1024px) {
    max-width: 80%;
    margin: 24px 0 24px 0;
  }
`;

const ProjectLanguages = styled.ul``;

const Button = styled.button`
  display: block;
  margin: 12px 0px 12px 0;
  background-color: #F5F5F5;
  border-radius: 40px;
  border: none;
  padding: 12px;
  font-family: 'Satoshi-Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #333333;

  &:hover {
    // background-color: ${(props) => props.btnColor};
    color: white;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    display: inline;
    margin-right: 5px;
  }
`;