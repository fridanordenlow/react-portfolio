import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillsWrapper>
      <Header>
        Skills
      </Header>
      <ListsWrapper>
        <Code>
          <li><span>Code</span></li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6</li>
          <li>React</li>
          <li>Styled Components</li>
          <li>Redux</li>
          <li>Node.js</li>
        </Code>
        <ToolBox>
          <li><span>Toolbox</span></li>
          <li>Visual Studio Code</li>
          <li>Postman</li>
          <li>MongoDB</li>
          <li>Github</li>
          <li>Figma</li>
          <li>Photoshop</li>
          <li>InDesign</li>
        </ToolBox>
        <More>
          <li><span>More</span></li>
          <li>Mob/Pair Programming</li>
          <li>Agile Methodology</li>
          <li>Visual Design</li>
        </More>
        {/* <Upcoming>
          <li><span>Upcoming</span></li>
          <li>Typescript.js</li>
        </Upcoming> */}
      </ListsWrapper>
    </SkillsWrapper>
  )
}

export default Skills;

const SkillsWrapper = styled.div`
    // background: #FDF2E4;
    background: #D5EDF8;
    // background: #a2bfb1;
    // height: 910px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    padding: 94px 24px 137px 24px;

    @media (min-width: 667px) {
        
    }
`

const Header = styled.h1`
    align-self: center;
    font-size: 80px;
    font-weight: 700;
    color: #EDA7B7;
    // color: #0B24F5;

    @media (min-width: 667px) {
       
    }
`
const ListsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 70px;
    font-size: 22px;
    line-height: 30px;
    font-family: 'EB Garamond';
    margin: 79px 0 66px 0;
    
    @media (min-width: 667px) {
       
    }
`
const Code = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
        display: flex; 
        font-family: 'Satoshi', sans-serif;
        background: #EB5577;
        color: #FFFFFF;
        // width: 70px;
        // height: 36px;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        align-items: center;
        margin-bottom: 16px;
        padding: 2px 5px 2px 5px;
    }
`
const ToolBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
        display: flex; 
        font-family: 'Satoshi', sans-serif;
        background: #61A0DF;
        // background: #2483E0;
        color: #FFFFFF;
        // width: 99px;
        // height: 36px;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 16px;
        padding: 2px 5px 2px 5px;
    }
`

const More = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
        display: flex; 
        font-family: 'Satoshi', sans-serif;
        background: #92BCA3;
        // background: #0B24F5;
        color: #FFFFFF;
        // width: 71px;
        // height: 36px;
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
