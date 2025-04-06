import React from 'react';
import ProfileImg from 'images/linkedin-pic-cropped.jpg'
// import ProfileImg from 'images/profile-pic_new.webp'
import DuvetImg from 'images/dreamer-duvet.webp'
// import DuvetImg from 'images/duvet-1.jpg'
import styled from 'styled-components';

const Introduction = () => {
  return (
    <IntroductionContainer>
      <AboutMeContainer>
        <AboutMeContent>
          <ImgAndTitlesContainer>
            <ProfileImage src={ProfileImg} alt="Profile image of Frida" />
            <ImgAndTitlesContainer lang="en-US">
              <Titles>
                <MyName>Frida Nordenlöw</MyName>
                <FirstProfession>Frontend Developer</FirstProfession>
                <SecondProfession>+ visual & textile artist</SecondProfession>
              </Titles>
            </ImgAndTitlesContainer>
          </ImgAndTitlesContainer>
          <AboutMeParagraph>
          Hello! I&apos;m a Frontend Developer with a background in the creative field, bringing a
          mix of problem-solving and design skills into building applications and websites. Creating
          has always been a big part of my life—whether through hands-on crafts, design, or now,
          coding. My journey into web development started with Technigo&apos;s bootcamp in 2023, and
          I&apos;m currently expanding my skills through the two-year program&nbsp;
            <a
              href="https://medieinstitutet.se/utbildningar/front-end-developer/?_gl=1*15fasuc*_up*MQ..*_ga*MjI3Nzk5MzA3LjE3NDIyMTYyMDA.*_ga_Z1PFJ3S4H8*MTc0MjIxNjE5OS4xLjAuMTc0MjIxNjE5OS4wLjAuMTA5ODQ1NjkzMQ..*_ga_1GR3EKMT4F*MTc0MjIxNjE5OS4xLjAuMTc0MjIxNjE5OS4wLjAuMA.."
              target="_blank"
              rel="noopener noreferrer">
              Frontend Developer
            </a> at Medieinstitutet in Stockholm.
            {/* Frida is a new frontend developer with great excitement for a future within tech.
            With a broad creative background she uses her problem-solving mind and visual
            skills to craft user-friendly applications and websites. Her curiosity and drive
            to grow and learn will make her a valuable asset to any project or team. */}
          </AboutMeParagraph>
          <LinkIconsContainer>
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
          </LinkIconsContainer>
        </AboutMeContent>
      </AboutMeContainer>
      <TextileContainer>
        <TextileImage src={DuvetImg} alt="Close-up image of textile duvet art piece" />
      </TextileContainer>
    </IntroductionContainer>
  )
};

export default Introduction;

const IntroductionContainer = styled.section`
    margin: 0px 30px 0px 30px;

    @media (min-width: 667px) and (max-width: 1024px) {
        display: flex;
        margin: 0;
    }
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        margin: 0;
    }
`

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    @media (min-width: 667px) {
      align-items: center;
      justify-content: center;
      width: 60%;
      padding: 94px 24px 94px 24px;
    }
    @media (min-width: 1200px) {
      flex: 1;
    }
`

const AboutMeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 55px 0 55px 0;

    @media (min-width: 667px) {
      margin: 0 50px 0 50px;
    }
    @media (min-width: 1024px) {
      max-width: 600px;
    }
`

const ImgAndTitlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    // margin-top: 55px;
    width: 100%;

    @media (min-width: 667px) and (max-width: 1024px) {
        flex-direction: column;
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

const AboutMeParagraph = styled.p`
    font-family: 'EB Garamond';
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 40px;

    a {
        // color: #86B8D7;
        color: black;
        font-style: italic;
        text-decoration: underline 1px;

        &:hover {
            color: #E58CA1; 
        }
    }
`

const LinkIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    padding: 0px;
    margin-top: 40px;
`

const Icon = styled.a`
    color:rgb(175, 175, 175);
    font-size: 26px;

    &:hover {
        color: #E58CA1;
    }
`

const TextileContainer = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: flex;
    width: 40%;
    align-items: stretch;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex: 1;
    align-items: stretch;
    justify-content: center;
  }
`

const TextileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
