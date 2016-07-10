'use strict';

var app = angular.module('confusionApp', []);
app.controller('ContactController', ['$scope', function ($scope) {
    $scope.feedback = {
        channel: "",
        fistName: "",
        lastName: "",
        agree: false,
        email: ""
    };
}]);

app.controller('FeedbackController', ['$scope', function ($scope) {
    $scope.sendFeedback = function () {
        //TODO!!!
    };
}]);