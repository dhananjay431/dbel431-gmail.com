angular.module('app').config(function($stateProvider,$urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise("/main/home");
    $locationProvider.html5Mode(true);
  $stateProvider.state({
    name: 'main',
    url: '/main',
    templateUrl: 'pages/main.html',
    // controller:"Home.ctrl"
    abstract: true,
  })
  .state({
    name: 'main.home',
    url: '/home',
    templateUrl: 'pages/home/home.html',
    controller:"Home.ctrl"
  })
  .state({
    name: 'main.alert',
    url: '/alerts',
    templateUrl: 'pages/alerts/alerts.html',
    controller:"Alerts.ctrl"
  })
  .state({
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  })
  ;
});