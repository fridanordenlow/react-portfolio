/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ProfileImg from 'images/linkedin-pic-cropped.jpg'
import DuvetImg from 'images/duvet-1.jpg'
import styled from 'styled-components';

const Introduction = () => {
  return (
    <IntroductionContainer>
      <PresentationContainer>
        <PresentationContent>
          {/* <div className="picture" aria-hidden="true">
        <img className="cover" src={} alt="portfolio cover" />
      </div> */}
          <ImgAndTitlesContainer>
            <ProfileImage src={ProfileImg} alt="Profile image of Frida" />
            <ImgAndTitlesContainer lang="en-US">
              <Titles>
                <MyName>Frida Nordenlöw</MyName>
                <FirstProfession>Frontend Developer</FirstProfession>
                <SecondProfession>+ textile artist</SecondProfession>
              </Titles>
            </ImgAndTitlesContainer>
          </ImgAndTitlesContainer>
          <PresentationParagraph>
          Hello! I&apos;m a frontend developer with a background in the creative field, bringing a
          mix of problem-solving and design skills into building applications and websites. Creating
          has always been a big part of my life—whether through hands-on crafts, design, or now,
          coding. My journey into web development started with Technigo&apos;s bootcamp in 2023, and
          I&apos;m currently expanding my skills through the two-year program&nbsp;
            <a
              href="https://medieinstitutet.se/utbildningar/front-end-developer/?_gl=1*15fasuc*_up*MQ..*_ga*MjI3Nzk5MzA3LjE3NDIyMTYyMDA.*_ga_Z1PFJ3S4H8*MTc0MjIxNjE5OS4xLjAuMTc0MjIxNjE5OS4wLjAuMTA5ODQ1NjkzMQ..*_ga_1GR3EKMT4F*MTc0MjIxNjE5OS4xLjAuMTc0MjIxNjE5OS4wLjAuMA.."
              target="_blank"
              rel="noopener noreferrer">
              Front End Developer
            </a> at Medieinstitutet in Stockholm.
            {/* Frida is a new frontend developer with great excitement for a future within tech.
            With a broad creative background she uses her problem-solving mind and visual
            skills to craft user-friendly applications and websites. Her curiosity and drive
            to grow and learn will make her a valuable asset to any project or team. */}
          </PresentationParagraph>
          {/* renamed from social media container */}
          <ContactContainer>
            <Icon hrefLang="en-US" title="Link to Frida's Linked In page" href="https://www.linkedin.com/in/fridanordenlow/" target="_blank" rel="noreferrer">
              <i aria-hidden="true" className="fab fa-linkedin-in" />
            </Icon>
            <Icon hrefLang="en-US" title="Link to Frida's Github page" href="https://github.com/fridanordenlow" target="_blank" rel="noreferrer">
              <i aria-hidden="true" className="fab fa-github" />
            </Icon>
            {/* <Icon href="https://www.instagram.com/fridanordenlow/?hl=sv" aria-label="Link to Fridas Instagram page">
            <i aria-hidden="true" className="fa-brands fa-instagram" />
          </Icon> */}
            <Icon hrefLang="en-US" title="Link to send an email to Frida" href="mailto:frida.nordenlow@hotmail.com" target="_blank" rel="noreferrer">
              <i aria-hidden="true" className="fa-solid fa-envelope" />
            </Icon>
          </ContactContainer>
        </PresentationContent>
      </PresentationContainer>
      <TextileImage src={DuvetImg} alt="Close-up image of textile duvet art piece" />
      {/* <QuoteContainer>
        <QuoteText>
        You might not think that programmers are artists, but programming is an
        extremely creative profession. It&apos;s logic-based creativity.
          <br />
          <br />
        - John Romero
        </QuoteText>
      </QuoteContainer> */}
    </IntroductionContainer>
  )
};

export default Introduction;

const IntroductionContainer = styled.section`
    margin: 0px 24px 0px 24px;

    @media (min-width: 667px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column-reverse;
        margin: 0px;
    }
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        height: 980px;
        margin: 0px;
    }
`

const PresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 667px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 81px 102px 81px 102px;
    }
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }
`

const PresentationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 252px;

    @media (min-width: 667px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 252px 50px 0px 50px;
    }
`

const ImgAndTitlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    width: 100%;

    @media (min-width: 667px) and (max-width: 1024px) {
        flex-direction: row;
        margin: 0px;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
        margin: 0px;
    }
`
const ProfileImage = styled.img`
    width: 164px; 
    height: 164px;
    border-radius: 50%;
    object-fit: cover;
    align-self: center;
    object-position: 10% 90%;

    @media (min-width: 667px) {
        margin-right: 29px;
    }
`

const Titles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 113px;
    margin-top: 34px;
`

const MyName = styled.h3`
    font-size: 28px;
    font-weight: 700;
    color: #86B8D7; // jättebäst
    // color: #8BC0E1; bäst
    // color: #90CDEB; bättre
    // color: #9FD1EA; bra
    margin-bottom: 5px;
    // color: #E58CA1; bra mellanrosa
`

const FirstProfession = styled.h2`
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 5px;
`

const SecondProfession = styled.h4`
    font-size: 24px;
    font-weight: 400;
    color: #565656;
`

const PresentationParagraph = styled.p`
    font-family: 'EB Garamond';
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 40px;

    a {
        color: #86B8D7;
        text-decoration: none;
        // margin-left: 5px;

        &:hover {
            color: #E58CA1; 
        }
    }

    @media (min-width: 667px) {
        padding-left: 40px;
    }
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /*align-items: flex-end;*/
    width: 240px;
    padding: 0px;
    margin: 40px 0px 0px 0px;

    @media (min-width: 667px) and (max-width: 1024px) {
        margin-bottom: 81px;
        padding-left: 40px;
    }
    @media (min-width: 1024px) {
        margin-top: 58px;
        padding-left: 40px;
    }
`

const Icon = styled.a`
    color: #D0D0D0;
    font-size: 26px;
    margin-right: 34px;

    &:hover {
        // color: black;
        color: #E58CA1;
  }
`

const TextileImage = styled.img`
    display: none;

        @media (min-width: 667px) and (max-width: 1024px) {
            display: flex;
            // flex-direction: row;
            // object-fit: cover;
            // align-self: center;
            // width: 40%;
        }
        @media (min-width: 1024px) {
            display: flex;
            justify-content: center;
            // width: 50%;
        }
`
/*
const QuoteContainer = styled.div`
    display: none;

    @media (min-width: 667px) and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCEDEA;
    }
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        background: #FCEDEA;
        width: 50%;
    }
` */

/* const QuoteText = styled.p`
    font-family: 'EB Garamond';
    font-style: italic;
    font-size: 22px;
    color: #EB5577;
    line-height: 30px;
    width: 50%;

    @media (min-width: 667px) and (max-width: 1024px) {
        font-family: 'EB Garamond';
        font-style: italic;
        font-size: 22px;
        color: #EB5577;
        line-height: 30px;
        width: 50%;
    }
    @media (min-width: 1024px) {
        font-family: 'EB Garamond';
        font-style: italic;
        font-size: 24px;
        color: #EB5577;
        padding-top: 320px;
        line-height: 40px;
        width: 60%;
    }
` */