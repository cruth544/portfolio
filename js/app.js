var app = angular.module('Portfolio')
  .config(['$stateProvider', '$urlRouterProvider', '$httProvider', MainRouter])
  .run(['$rootScope', '$state', '$location', runFunction])

function MainRouter($stateProvider, $urlRouterProvider, $httProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '',
      params: null,
      controller: ''
    })
}
