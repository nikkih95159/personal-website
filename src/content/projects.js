import cnn from '../images/cnn.png'
import gympal from '../images/gym-pal.png'
import ign from '../images/ign.png'
import spotify from '../images/spotify.png'
import portfolio from '../images/portfolio.png'
import todoext from '../images/todoext.jpg'

export default [
    {
      title: 'Todo Extension',
      description:
        'A Google Chrome extension, inspired by Momentum, that allows you to do update your todos on Chrome and a corresponding android app.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Java'],
      image: todoext,
      links: {
        github: 'https://github.com/nikkih95159/WebTodoExt',
        // preview: '',
      },
    },
    {
      title: 'Image Classification',
      description:
        'A neural network project for a deep learning class where I trained a convolutional neural network on landmark images from Google.',
      skills: ['Python', 'Pytorch'],
      image: cnn,
      links: {
        github: 'https://github.com/nikkih95159/COGS181Project',
      },
    },
    {
      title: 'Gym-Pal',
      description:
        'Team project for a design interaction class at UCSD. Produces specialized workouts catered towards the user\'s specified muscles.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      image: gympal,
      links: {
        github: 'https://github.com/nikkih95159/Gym-Pal',
      },
    },
    {
      title: 'Video Player',
      description:
        'Part of a challenge for an internship at IGN. Contains a stylized video player pulled from the IGN API with more related videos and descriptions.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      image: ign,
      links: {
        github: 'https://github.com/nikkih95159/IGN',
        // preview: 'https://nikkih95159.github.io/IGN/',
      },
    },
    {
      title: 'Spotify Playlist',
      description:
        'Largely inspired from the Youtuber, TheComeUp. Takes liked videos from YouTube and creates a new Spotify playlist and includes suggested songs based on Spotify\'s API.',
      skills: ['Python'],
      image: spotify,
      links: {
        github: 'https://github.com/nikkih95159/Spotify-Playlist',
        // preview: '',
      },
    },
    {
      title: 'Portfolio',
      description:
        'This website! Created with React and Gatsby.',
      skills: ['HTML', 'Sass', 'JavaScript', 'ReactJS'],
      image: portfolio,
      links: {
        github: 'https://github.com/nikkih95159/personal-website',
        // preview: '',
      },
    }
  ];