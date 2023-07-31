/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Introduction = () => {
  return (
    <header>
      <div className="picture" aria-hidden="true">
        <img className="cover" src="../images/portfolio-cover.png" alt="portfolio cover" />
      </div>
      <div className="header-container">
        <div className="myProfilePic">
          <img className="profile-pic" src="../images/img_3060.jpg" alt="profile image of Fanny" />
        </div>
        <div className="nameAndTitle" lang="en-US">
          <h1 className="name">Frida Nordenlöw</h1>
          <h2 className="title">Frontend Developer</h2>
        </div>
        <div className="introduction" lang="en-US">
          <p>
            Bla bla...
          </p>
        </div>
        <div className="contact-me">
          <a hrefLang="en-US" className="icon" title="link to Fanny's Linked In page" href="https://www.linkedin.com/in/fanny-stenberg/" target="_blank" rel="noreferrer">
            <i aria-hidden="true" className="fab fa-linkedin-in" />
          </a>
          <a hrefLang="en-US" className="icon" title="link to Fanny's Github page" href="https://github.com/fannystenberg" target="_blank" rel="noreferrer">
            <i aria-hidden="true" className="fab fa-github" />
          </a>
          <a hrefLang="en-US" className="icon" title="link to Fanny's mail" href="mailto:ffannystenberg@gmail.com" target="_blank" rel="noreferrer">
            <i aria-hidden="true" className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </header>
  )
};

export default Introduction;