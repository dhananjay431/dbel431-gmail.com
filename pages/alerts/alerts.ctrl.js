angular.module('app')

.controller('Alerts.ctrl', function($scope,dataChange) {
  $scope.data = dataChange;
  
});