'use strict';

var app = angular.module('confusionApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: '/',
        views: {
            'header': {
                templateUrl: 'views/header.html'
            },
            'content' : {
                template: '<h1>tbc</h1>',
                controller: 'IndexController'
            },
            'footer': {
                templateUrl: 'views/footer.html'
            }
        }
    })
    .state('app.aboutus', {
        url: 'aboutus',
        views: {
            'content@' : {
                template: '<h1>tbc</h1>'
            }
        }
    })
    .state('app.contactus', {
        url: 'contactus',
        views: {
            'content@' : {
                templateUrl: 'views/contactus.html',
                controller: 'ContactController'
            }
        }
    })
    .state('app.menu', {
        url: 'menu',
        views: {
            'content@' : {
                templateUrl: 'views/menu.html',
                controller: 'MenuController'
            }
        }
    })
    .state('app.dishdetails', {
        url: 'menu/:id',
        views: {
            'content@' : {
                templateUrl: 'views/dishdetail.html',
                controller: 'DishDetailController'
            }
        }
    });
    $urlRouterProvider.otherwise('/');
});