app
  .factory('Projects', [ProjectService])

function ProjectService() {
  var service = {}
  service.badgeIcon = {
    HTML5: '../assets/HTML5_logo_and_wordmark.svg.png',
    JavaScript: '../assets/js.png',
    NodeJS: '../assets/nodejs.png',
    ExpressJS: '../assets/express.png',
    AngularJS: '../assets/angular.png',
    MongoDB: '../assets/mongodb-logo-large.png',
    Rails: '../assets/Ruby_on_Rails.svg.png',
    Haml: '../assets/haml.png',
    PostgreSql: '../assets/postgresql_logo-555px.png',
    SASS: '../assets/sass-logo.svg'
  }

  service.projects = [
    {name: 'Geometry Wars',
      link: 'http://cruth544.github.io/Geometry-Wars/',
      github: 'https://github.com/cruth544/Geometry-Wars',
      picture: '../assets/Geometry-Wars-Screen-Shot.png',
      technologies: ['JavaScript', 'SASS'],
      description: 'Controls: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up: W<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Down: S<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Left: A<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Right: D<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shoot: Spacebar<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Geometry Wars is a simple game of survival. The player controls the heroic triangle to defeat the evil squares! Geometry Wars focuses heavily on Object Oriented architecture to create each shape. Shapes handle all functionality themselves with methods on the "Shape" object. Geometry Wars is powered with a custom "physics engine" to handle all the movement and collision events.'
    },
    {name: 'Greennit',
      link: 'https://greenit-app.herokuapp.com/',
      github: 'https://github.com/cruth544/greennit',
      picture: '../assets/Greenit-Screen-Shot.png',
      technologies: ['Rails', 'PostgreSql', 'Haml'],
      description: 'Greenit is an easy to use media sharing website modeled after the popular Reddit. The Greenit backend is powered by Ruby on Rails and has the functionality for users to create Subgreenits, posts, and comments. The user can post links to all types of media, and the post can be easily viewed without having to click on any links.'
    },
    {name: 'After-Hours',
      link: 'http://after-hours-now.herokuapp.com/',
      github: 'https://github.com/cruth544/After-Hours',
      picture: '../assets/After-Hours-ScreenShot.png',
      technologies: ['NodeJS', 'ExpressJS', 'MongoDB'],
      description:
        'After-Hours uses a NodeJS backend to search for current and local happy hours. The frontend utilizes the Google Maps API to display the current happy hour locations on a map near you. The back end uses the Yelp API to fetch a list of restaurants with a "Happy Hour" search term. Since there is no listing of happy hour on yelp, After-Hours scrapes for the reviews on Yelp\'s website and grabs happy hour times from Yelp\'s user\'s comments, which are then displayed to our user'
    },
    {name: 'Lip',
      link: 'https://d8bwwyct99aku.cloudfront.net/#/',
      picture: '../assets/lipsyncwithus.png',
      github: 'https://github.com/cruth544/Lip',
      technologies: ['AngularJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'HTML5'],
      description:
        'LipSyncWith.Us is an AngularJS frontend app with use of HTML 5 video and audio tags, while the back end is written in NodeJS with ExpressJS. Videos and songs are stored in an Amazon S3 bucket, while the urls for videos and songs are stored into the MongoDB.'
    }
  ]

  return service
}
