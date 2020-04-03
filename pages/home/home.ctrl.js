angular.module('app')

.controller('Home.ctrl', function($scope,dataChange) {
  $scope.data = [0, 1, 2, 3, 4, 5, 6];
  $scope.formData = {};
  $scope.saveData = function(){
    console.log("formData=>",$scope.formData)
    dataChange.data.homePage = $scope.formData;
    dataChange.http.get('https://jsonplaceholder.typicode.com/posts').then(function(resp){
          console.log("resp=>",resp);
    });
  }
});