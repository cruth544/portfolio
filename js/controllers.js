app.controller('MainCtrl', ['$scope', 'Projects', MainCtrl])

function MainCtrl ($scope, Projects) {
  $scope.projects = Projects.projects
  $scope.badgeIcon = Projects.badgeIcon
}
