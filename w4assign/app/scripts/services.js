"use strict";

var app = angular.module('confusionApp');
app.constant("baseURL", "http://localhost:3000/");
app.service("dishesService", ["$resource", "baseURL", function ($resource, baseURL) {
    this.getDishes = function () {
        return $resource(baseURL + "dishes/:id", null, {
            update : {
                method : 'PUT'
            }
        });
    };
    this.getPromotions = function () {
        return $resource(baseURL + "promotions/:id", null, {
            update : {
                method : 'PUT'
            }
        });
    };
}]);
app.service("corporateService", ["$resource", "baseURL", function ($resource, baseURL) {
    this.getLeaders = function () {
        return $resource(baseURL + "leadership/:id", null, {
            update : {
                method : 'PUT'
            }
        });
    };
}]);
app.service("feedbackService", ["$resource", "baseURL", function ($resource, baseURL) {
    this.getFeedback = function () {
        return $resource(baseURL + "feedback/:id", null, {
            update : {
                method : 'PUT'
            }
        });
    };
}]);