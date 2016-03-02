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
    PostgreSql: '../assets/postgresql_logo-555px.png'
  }

  service.projects = [
    {name: 'Geometry Wars',
      link: 'http://cruth544.github.io/Geometry-Wars/',
      github: 'https://github.com/cruth544/Geometry-Wars',
      picture: '../assets/Greenit-Screen-Shot.png',
      description: 'description',
      technologies: ['JavaScript']},
    {name: 'Greennit',
      link: 'https://greenit-app.herokuapp.com/',
      github: 'https://github.com/cruth544/greennit',
      picture: '../assets/Greenit-Screen-Shot.png',
      description: 'description',
      technologies: ['Rails', 'PostgreSql', 'Haml']},
    {name: 'After-Hours',
      link: 'http://after-hours-now.herokuapp.com/',
      github: 'https://github.com/cruth544/After-Hours',
      picture: '../assets/After-Hours-ScreenShot.png',
      description: 'description',
      technologies: ['NodeJS', 'ExpressJS', 'MongoDB']},
    {name: 'Lip',
      link: 'https://d8bwwyct99aku.cloudfront.net/#/',
      picture: '../assets/lipsyncwithus.png',
      github: 'https://github.com/cruth544/Lip',
      description: 'description',
      technologies: ['AngularJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'HTML5']}
  ]

  return service
}
