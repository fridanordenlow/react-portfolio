// import Artsie from 'images/Artsie.png';
import BeautifulSky from 'images/beautiful-sky.jpg'
import SpotifyPhone from 'images/spotify-phone.jpg'
import WeatherForecast from 'images/weather-app.png'
import MovieFeed from 'images/movie-page.png'
import ToDoList from 'images/to-do-list.png'
import LabyrinthGame from 'images/labyrinth-mockup.png'

const ProjectData = [
  {
    img: `${LabyrinthGame}`,
    title: 'Oldschool Labyrinth Game',
    description: '',
    techLanguages: ['Redux', 'React', 'JSX', 'Javascript ES6', 'CSS3'],
    githubLink: 'project-labyrinth',
    deployedLink: 'reliable-sorbet-d720d3'
    // deployedLink: 'https://reliable-sorbet-d720d3.netlify.app/?'
  },
  {
    img: `${ToDoList}`,
    title: 'To Do List Web App',
    description: 'An online to-do list that uses Redux and reducers to manage adding, completing and deleting tasks and other functions such as visualizing how many tasks you have completed.',
    techLanguages: ['Redux', 'React', 'JSX', 'Javascript ES6', 'CSS3'],
    githubLink: 'project-todos',
    deployedLink: 'to-do-list-by-frida'
    // https://to-do-list-by-frida.netlify.app/
  },
  {
    img: `${MovieFeed}`,
    title: 'Movie Page',
    description: 'In this project I worked with two Technigo teammates to make a movie site that collected data from an API. We learned how to work and implement new React hooks and functions to enable us to create and navigate to multiple pages.',
    techLanguages: ['React', 'JSX', 'Javascript ES6', 'CSS3'],
    githubLink: 'project-movies',
    deployedLink: 'cosmic-daffodil-7c032f'
    // https://cosmic-daffodil-7c032f.netlify.app/
  },
  {
    // projectImg: `${AuthImg}`,
    img: `${BeautifulSky}`,
    title: 'The Dream Survey',
    description: 'In this project I have made a little fictional dream survey sent out by the Sandman. The user is asked a number of questions about their dream preferences and in the end they are presented with a summary of their answers. I this project I practiced working with React, specifically components and states. ',
    techLanguages: ['Javascript ES6', 'HTML5', 'CSS3'],
    githubLink: 'project-survey',
    deployedLink: 'the-dream-survey'
    // githubLink: 'https://github.com/fridanordenlow/project-survey',
    // deployedLink: 'https://the-dream-survey.netlify.app'
    // githubLink: 'project-redux-quiz',
    // netlifyLink: 'neon-souffle-d2a8b2'
  },
  {
    img: `${SpotifyPhone}`,
    title: 'Music Releases',
    description: 'This site shows new releases from Spotify, with data from local json-data, and links to music on Spotify. This was a pair project and the first time we were using React, components, and JSX.',
    techLanguages: ['React', 'Javascript ES6', 'HTML5', 'CSS3'],
    githubLink: 'project-music-releases',
    deployedLink: 'music-releases-by-frida-and-fiona'
    // githubLink: 'https://github.com/fridanordenlow/project-music-releases',
    // deployedLink: 'https://music-releases-by-frida-and-fiona.netlify.app'
  },
  {
    img: `${WeatherForecast}`,
    title: 'Weather App',
    description: 'This weather site shows the current weather and a five day forecast in the chosen city by pulling data from the Open Weather API. to update the current and 5-day forecast. It changes color and weather icons based on the current conditions.',
    techLanguages: ['Javascript ES6', 'HTML5', 'CSS3'],
    githubLink: 'project-weather-app',
    deployedLink: 'voluble-bonbon-854851'
    // githubLink: 'https://github.com/fridanordenlow/project-weather-app',
    // deployedLink: 'https://voluble-bonbon-854851.netlify.app'
  },
  {
    // img:
    title: 'Guess Who? The Game',
    description: 'This is a digital version of the classic board game "Guess Who?". It uses conditional statements, array methods and many more Javascript features to filter characters based on the players questions and finally lets you know if you have made the right guess or not!',
    techLanguages: ['Javascript ES6', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/fridanordenlow/project-guess-who',
    deployedLink: 'guess-who-game-by-frida'
    // githubLink: 'https://github.com/fridanordenlow/project-guess-who',
    // deployedLink: 'https://guess-who-game-by-frida.netlify.app/'
  },
  {
    // img:
    title: 'Chat Bot',
    description: 'The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries. ',
    techLanguages: ['Javascript ES6', 'HTML5', 'CSS3'],
    githubLink: 'project-chatbot',
    deployedLink: 'stirring-babka-1cb6d7'
    // githubLink: 'https://github.com/fridanordenlow/project-chatbot',
    // deployedLink: 'https://stirring-babka-1cb6d7.netlify.app'
  }
]

export default ProjectData;