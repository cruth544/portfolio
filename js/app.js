var app = angular.module('Portfolio',
  ['ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', MainRouter])
  .run(['$rootScope', '$state', '$location', runFunction])

function MainRouter($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/main.html',
      params: null,
      controller: 'MainCtrl'
    })

  $urlRouterProvider.otherwise('/')
}

function runFunction($rootScope, $state, $location) {

}
