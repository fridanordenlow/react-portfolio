// import Artsie from 'images/Artsie.png';
import TextileWebshop from 'images/textile-webshop_portfolio.webp'
import JazzUpQuiz from 'images/jazzy-quiz_preview.webp'
import LabyrinthGame from 'images/labyrinth-mockup.png'
import BeautifulSky from 'images/beautiful-sky.jpg'
import SpotifyPhone from 'images/spotify-phone.jpg'
import WeatherForecast from 'images/weather-app.png'
import MovieFeed from 'images/movie-page.png'
import ToDoList from 'images/to-do-list.png'
import GuessWho from 'images/guess-who-game_preview2.webp'
import ChatBot from 'images/chat_bot.png'

const ProjectData = [
  {
    img: `${TextileWebshop}`,
    title: 'Textile Webshop',
    description: 'A fictional webshop application for textiles, built with vanilla JavaScript. This project includes functionalities such as listing products, sorting and filtering, managing a shopping cart, and placing orders through a form.',
    techLanguages: ['Javascript', 'HTML5', 'SCSS'],
    githubLink: 'project-everyday-textile-webshop',
    deployedLink: 'https://fridanordenlow.github.io/project-everyday-textile-webshop/'
  },
  {
    img: `${JazzUpQuiz}`,
    title: 'Jazz Up Quiz',
    description: 'An engaging and user-friendly music quiz game emphasizing accessible design and intuitive feedback. Features randomized questions, multiple-choice answers, a scoring system with speed bonuses, and a final summary showing score and time.',
    techLanguages: ['JavaScript', 'Typescript', 'HTML5', 'CSS3', 'SASS'], // UPPDATERA
    githubLink: 'project-jazzy-music-quiz',
    deployedLink: 'https://fridanordenlow.github.io/project-jazzy-music-quiz/'
  },
  {
    img: `${LabyrinthGame}`,
    title: 'Old School Labyrinth Game',
    description: 'A little labyrinth game built in React where we worked with storing the current state of the game using thunks and async actions in Redux. A very fun group project We flirted with some coding elements in the design.',
    techLanguages: ['Redux', 'React', 'JSX', 'Javascript', 'CSS3'],
    githubLink: 'project-labyrinth',
    // deployedLink: 'reliable-sorbet-d720d3'
    deployedLink: 'https://reliable-sorbet-d720d3.netlify.app/'
  },
  {
    img: `${ToDoList}`,
    title: 'To Do List Web App',
    description: 'An online to-do list that uses Redux and reducers to manage adding, completing and deleting tasks and other functions such as visualizing how many tasks you have completed.',
    techLanguages: ['Redux', 'React', 'JSX', 'Javascript', 'CSS3'],
    githubLink: 'project-todos',
    // deployedLink: 'to-do-list-by-frida'
    deployedLink: 'https://to-do-list-by-frida.netlify.app/'
  },
  {
    img: `${MovieFeed}`,
    title: 'Movie Page',
    description: 'In this project I worked with two Technigo teammates to make a movie site that collected data from an API. We learned how to work and implement new React hooks and functions to enable us to create and navigate to multiple pages.',
    techLanguages: ['React', 'JSX', 'Javascript', 'CSS3'],
    githubLink: 'project-movies',
    // deployedLink: 'cosmic-daffodil-7c032f'
    deployedLink: 'https://cosmic-daffodil-7c032f.netlify.app/'
  },
  {
    // projectImg: `${AuthImg}`,
    img: `${BeautifulSky}`,
    title: 'The Dream Survey',
    description: 'In this project I have made a little fictional dream survey sent out by the Sandman. The user is asked a number of questions about their dream preferences and in the end they are presented with a summary of their answers. I this project I practiced working with React, specifically components and states. ',
    techLanguages: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'project-survey',
    // deployedLink: 'the-dream-survey'
    deployedLink: 'https://the-dream-survey.netlify.app'
  },
  {
    img: `${SpotifyPhone}`,
    title: 'Music Releases',
    description: 'This site shows new releases from Spotify, with data from local json-data, and links to music on Spotify. This was a pair project and the first time we were using React, components, and JSX.',
    techLanguages: ['React', 'Javascript', 'HTML5', 'CSS3'],
    githubLink: 'project-music-releases',
    // deployedLink: 'music-releases-by-frida-and-fiona'
    deployedLink: 'https://music-releases-by-frida-and-fiona.netlify.app'
  },
  {
    img: `${WeatherForecast}`,
    title: 'Weather App',
    description: 'This weather site shows the current weather and a five day forecast in the chosen city by pulling data from the Open Weather API. to update the current and 5-day forecast. It changes color and weather icons based on the current conditions.',
    techLanguages: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'project-weather-app',
    // deployedLink: 'voluble-bonbon-854851'
    deployedLink: 'https://voluble-bonbon-854851.netlify.app'
  },
  {
    img: `${GuessWho}`,
    title: 'Guess Who? The Game',
    description: 'This is a digital version of the classic board game "Guess Who?". It uses conditional statements, array methods and many more Javascript features to filter characters based on the players questions and finally lets you know if you have made the right guess or not!',
    techLanguages: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/fridanordenlow/project-guess-who',
    // deployedLink: 'guess-who-game-by-frida'
    deployedLink: 'https://guess-who-game-by-frida.netlify.app/'
  },
  {
    img: `${ChatBot}`,
    title: 'Chat Bot',
    description: 'The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries. ',
    techLanguages: ['Javascript', 'HTML5', 'CSS3'],
    githubLink: 'project-chatbot',
    // deployedLink: 'stirring-babka-1cb6d7'
    // githubLink: 'https://github.com/fridanordenlow/project-chatbot',
    deployedLink: 'https://stirring-babka-1cb6d7.netlify.app'
  }
]

export default ProjectData;