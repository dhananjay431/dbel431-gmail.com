angular.module('app')
.directive('navBar', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
      },
      templateUrl:'directive/nav.html',
      replace: true
    };
  })