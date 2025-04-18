import React from 'react';
import styled from 'styled-components';
import ProfileImg from 'images/linkedin-pic-cropped.jpg'

const Contact = () => {
  return (
    <ContactWrapper>
      <Header>Contact</Header>
      <ImgAndTitlesContainer>
        <ProfileImage src={ProfileImg} alt="Profile image of Frida" />
        <Titles>
          <MyName>Frida Nordenlöw</MyName>
          <FirstProfession>Frontend Developer</FirstProfession>
          <SecondProfession>+ visual & textile artist</SecondProfession>
        </Titles>
      </ImgAndTitlesContainer>
      <ContactInfo>
        <p>+46(0) 735 76 64 12</p>
        <p>frida.nordenlow@medieinstitutet.se</p>
        <p>Stockholm, Sweden</p>
      </ContactInfo>
      <IconsContainer>
        <Icon hrefLang="en-US" title="Link to Frida's Linked In page" href="https://www.linkedin.com/in/fridanordenlow/" target="_blank" rel="noreferrer">
          <i aria-hidden="true" className="fab fa-linkedin-in" />
        </Icon>
        <Icon hrefLang="en-US" title="Link to Frida's Github page" href="https://github.com/fridanordenlow" target="_blank" rel="noreferrer">
          <i aria-hidden="true" className="fab fa-github" />
        </Icon>
        {/* <Icon href="https://www.instagram.com/fridanordenlow/?hl=sv" aria-label="Link to Fridas Instagram page">
            <i aria-hidden="true" className="fa-brands fa-instagram" />
          </Icon> */}
        <Icon hrefLang="en-US" title="Link to send an email to Frida" href="mailto:frida.nordenlow@medieinstitutet.se" target="_blank" rel="noreferrer">
          <i aria-hidden="true" className="fa-solid fa-envelope" />
        </Icon>
      </IconsContainer>
    </ContactWrapper>
  )
};

export default Contact;

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #AAC5B5;
    padding: 94px 0;
    // background: #F3DDDF; light pink
    // background: #e5c0c3;
`
const Header = styled.div`
    color: black;
    font-size: 60px;
    font-weight: 800;
    line-height: 78px;
    margin-bottom: 65px;

    @media (min-width: 667px) {
        font-size: 72px;
        margin-bottom: 80px;
  }
`

const ImgAndTitlesContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 667px) {
        flex-direction: row;
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
    height: 115px;
    margin-top: 34px;
`

const MyName = styled.h3`
    font-size: 28px;
    font-weight: 700;
    color: black;
`

const FirstProfession = styled.h2`
    font-size: 32px;
    font-weight: 900;
`

const SecondProfession = styled.h4`
    font-size: 24px;
    font-weight: 400;
    color: #565656;
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // align-self: flex-start;
    color: black;
    font-weight: 700; // 900?
    font-size: 18px;
    line-height: 30px;
    margin: 56px 0px 56px 0px;
    
    @media (min-width: 667px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: 700;
        // font-size: 32px;
        line-height: 43px;
        margin: 80px 0px 80px 0px;
    }
`

const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 150px;
`

const Icon = styled.a`
    color: black;
    font-size: 26px;

    &:hover {
        color: #D0D0D0;
  }
  @media (min-width: 667px) {
    font-size: 30px;  
    }
`