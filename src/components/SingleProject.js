import React from 'react';
import styled from 'styled-components';
import ViewCode from 'icons/View-Code-Button.svg'
import ViewCodeHover from 'icons/View-Code-Button-Hover.svg'
import LiveDemo from 'icons/Live-Demo-Button.svg'
import LiveDemoHover from 'icons/Live-Demo-Button-Hover.svg'

const SingleProject = (
  { img, title, description, techLanguages, githubLink, deployedLink }
) => {
  console.log(title)
  console.log(description)
  console.log(deployedLink)
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
  margin-top: 24px;
  // margin: 0px 24px 120px 0px;

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
  margin: 0px 24px 24px 0;
`;

const ProjectImage = styled.img`
    object-fit: cover;
    // width: 184px;
    width: 280px;
    height: 280px;

  @media (min-width: 667px) and (max-width: 1024px) {
    object-fit: cover;
    // width: 184px;
    height: 280px;
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

const ProjectLanguages = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;
    font-size: 16px;
    margin-top: 18px;
`;

const ViewCodeButton = styled.button`
    width: 200px; 
    height: 48px;
    background-image: url(${ViewCode});
    margin-top: 24px;
    background-size: cover; 
    background-position: center; 
    background-color: white;
    border: none;

    &:hover {
    background-image: url(${ViewCodeHover});
      // background: url('icons/View-Code-Button-Hover.svg');
  }
`

const LiveDemoButton = styled.button`
    width: 164px; 
    height: 48px;
    background-image: url(${LiveDemo});
    margin-top: 24px;
    background-size: cover; 
    background-position: center;
    background-color: white;
    border: none;
    margin-left: 20px;

    &:hover {
        background-image: url(${LiveDemoHover});
  }
`

// const Button = styled.button`
//   display: block;
//   margin: 12px 0px 12px 0;
//   background-color: #F5F5F5;
//   border-radius: 40px;
//   border: none;
//   padding: 12px;
//   font-family: 'Satoshi-Variable';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 27px;
//   color: #333333;

//   &:hover {
//     // background-color: ${(props) => props.btnColor};
//     color: white;
//   }

//   @media (min-width: 667px) and (max-width: 1024px) {
//     display: inline;
//     margin-right: 5px;
//   }
// `;