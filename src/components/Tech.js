/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Tech = () => {
  return (
    <TechWrapper>
      <Header>
        Tech
      </Header>
      <TechParagraph>
          HTML, CSS, <SpanRed>JavaScript ES6,</SpanRed> JSX, <SpanGreen>React,</SpanGreen> React Hooks, Styled Components, Redux, Node.js, Mongo DB, Web Accessibly, API:s, <SpanBlue>mob-programming,</SpanBlue> pair-programming, Github.
      </TechParagraph>
    </TechWrapper>
  )
}

const TechWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 94px 24px 120px 24px;
    background: #EDFFFF;
    justify-content: center;
    align-items: center;
// background-color: #F0EAD4;
// height: 500px;
// width: 100%;
// margin-bottom: 20px;
// position: relative;
    @media (min-width: 667px) {
        // width: 400px;
        padding: 254px 24px 287px 24px;
    }
`

const Header = styled.h1`
    align-self: center;
    font-size: 80px;
    font-weight: 700;
    color: #0B24F5;
`
const TechParagraph = styled.p`
    font-family: 'EB Garamond';
    font-size: 22px;
    padding: 20px;
    line-height: 30px;

    @media (min-width: 667px) {
        // width: 400px;
        width: 500px;
        height: 91px; 
        align-self: center;
        margin: 60px 0px 0px 0px;
    }
`

const SpanRed = styled.span`
    background: #EB5577;
    color: #FFFFFF;
    text-align: center;
    padding: 0 2px 2px 2px;
`

const SpanGreen = styled.span`
    background:#6DB486;
    color: #FFFFFF;
    text-align: center;
    padding: 0 2px 2px 2px;
`

const SpanBlue = styled.span`
    background: #2483E0;
    color: #FFFFFF;
    text-align: center;
    padding: 0 2px 2px 2px;
`

export default Tech;