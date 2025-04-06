import React from 'react';
import styled from 'styled-components';
import ProjectData from './ProjectData.js';
import SingleProject from './SingleProject.js';

const FeaturedProjectsList = () => {
  return (
    <FeaturedProjectsContainer lang="en-US" title="List of Frida's featured projects">
      <Header lang="en">Featured Projects</Header>
      {ProjectData.map((project) => {
        return (
          <SingleProject
            key={project.img}
            img={project.img}
            title={project.title}
            description={project.description}
            techLanguages={project.techLanguages.map(
              (language) => <TechLanguages key={language}>{language}</TechLanguages>
            )}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink} />
        )
      })}
    </FeaturedProjectsContainer>
  )
};

export default FeaturedProjectsList;

export const FeaturedProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 850px) and (max-width: 1024px) {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 40px;
  }

  @media (min-width: 1024px) {
    padding: 94px 40px;
    max-width: 1000px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.h2`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 80px;
  color: #a2bfb1;
  align-self: center;

  @media (min-width: 1024px) {
   font-size: 72px;
   padding-bottom: 20px;
   // align-self: flex-start;
  }

`;

export const TechLanguages = styled.li`
  display: inline;
  padding: 2px 6px 2px 6px;
  margin-right: 5px;
  background-color: black;
  color: white;
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;
