app
  .factory('Projects', [ProjectService])

function ProjectService() {
  var service = {}
  service.projects = [
    {name: 'Geometry Wars',
      github: 'https://github.com/cruth544/Geometry-Wars'},
    {name: 'Greenit',
      github: 'https://github.com/cruth544/greenit'},
    {name: 'After-Hours',
      github: 'https://github.com/cruth544/after-hours'},
    {name: 'Lip',
      github: 'https://github.com/cruth544/lip'}
  ]

  return service
}
