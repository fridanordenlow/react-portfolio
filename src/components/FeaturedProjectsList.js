import React from 'react';
import styled from 'styled-components';
import ProjectData from './ProjectData.js';
import SingleProject from './SingleProject.js';

const FeaturedProjectsList = () => {
  return (
    <Section lang="en-US" title="List of Frida's featured projects">
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
            deployedLink={project.netlifyLink} />
        )
      })}
    </Section>
  )
};

export default FeaturedProjectsList;

export const Section = styled.section`
  margin: 60px 24px 0px 24px;

  @media (min-width: 667px) and (max-width: 1024px) {
    padding: 0px 24px 0px 24px;
    margin-top: 120px;
  }

  @media (min-width: 1024px) {
    width: 820px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Header = styled.h2`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 80px;
  color: #0B24F5;
  margin: 24px 24px 24px 0;
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
  color: #FFFFFF;
`;
