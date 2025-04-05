import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillsContainer>
      <Header>
        Skills
      </Header>
      <ListsWrapper>
        <Code>
          <li><span>Code</span></li>
          <li>HTML & CSS</li>
          <li>SCSS & Styled Components</li>
          <li>JavaScript & TypeScript</li>
          <li>React & Vue</li>
          <li>Redux & Pinia</li>
          <li>Node & Express</li>
          <li>RESTful APIs & Fetch</li>
          <li>SQL & NoSQL</li>

        </Code>
        <Tools>
          <li><span>Tools</span></li>
          <li>Visual Studio Code</li>
          <li>Git & GitHub</li>
          <li>Vite</li>
          {/* <li>npm & pnpm</li> */}
          <li>Prettier</li>
          <li>ESLint</li>
          <li>Postman & Insomnia</li>
          <li>MongoDB</li>
          <li>Figma</li>
          <li>Photoshop & InDesign</li>
          {/* <li>InDesign</li> */}
        </Tools>
        <Other>
          <li><span>Other skills</span></li>
          <li>Mob/Pair Programming</li>
          <li>Agile Methodology (Scrum)</li>
          <li>Web Accessibilty (a11y)</li>
          <li>UI/UX Design Principles</li>
          <li>Visual Design</li>
          <li>Color Theory</li>
        </Other>
        {/* <Upcoming>
          <li><span>Upcoming</span></li>
          <li>Typescript.js</li>
        </Upcoming> */}
      </ListsWrapper>
    </SkillsContainer>
  )
}

export default Skills;

const SkillsContainer = styled.div`
    // background: #FDF2E4;
    background: #D5EDF8;
    // background: #a2bfb1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    padding: 94px 0 94px 0;

    @media (min-width: 900px) {
        
    }
`

const Header = styled.h1`
    align-self: center;
    font-size: 80px;
    font-weight: 700;
    color: #EDA7B7;
    // color: #0B24F5;
`
const ListsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    // column-gap: 70px;
    font-size: 22px;
    line-height: 30px;
    font-family: 'EB Garamond';
    margin-top: 79px;
    
    @media (min-width: 567px) {
      flex-wrap: wrap;
      flex-direction: row;
      gap: 40px 70px;
      // row-gap: 40px;
      // justify-content: center;
      justify-content: flex-start;
      justify-self: center;
      max-width: 506px; // Exakt Code + gap 40px + Tools
    }

    @media (min-width: 900px) {
      max-width: 1000px;
    }
`
const Code = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;

    span {
        display: flex; 
        font-family: 'Satoshi', sans-serif;
        background: #EB5577;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 16px;
        padding: 2px 5px 2px 5px;
    }
`
const Tools = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;

    span {
        display: flex; 
        font-family: 'Satoshi', sans-serif;
        background: #61A0DF;
        // background: #2483E0;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 16px;
        padding: 2px 5px 2px 5px;
    }
`

const Other = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
        display: flex; 
        font-family: 'Satoshi', sans-serif;
        background: #92BCA3;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 16px;
        padding: 2px 5px 2px 5px;
    }
`

/* const Upcoming = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
        display: flex;
        font-family: 'Satoshi', sans-serif;
        background: #6DB486;
        color: #FFFFFF;
        // width: 127px;
        // height: 36px;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 16px;
        padding: 2px 5px 2px 5px;
    }
` */
