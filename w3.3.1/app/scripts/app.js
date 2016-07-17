'use strict';

var app = angular.module('confusionApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/menu', {
            templateUrl : 'menu.html',
            controller  : 'MenuController'
        })
        .when('/menu/:id', {
            templateUrl : 'dishdetail.html',
            controller  : 'DishDetailController'
        })
        .when('/contactus', {
            templateUrl : 'contactus.html',
            controller  : 'ContactController'
        })
        .otherwise('/menu');
});