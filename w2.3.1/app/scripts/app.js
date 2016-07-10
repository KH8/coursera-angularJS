'use strict';

function getPristineFeedback() {
    return {
        myChannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
    };
}

var app = angular.module('confusionApp', []);
app.controller('ContactController', ['$scope', function ($scope) {
    $scope.feedback = getPristineFeedback();
    $scope.invalidChannelSelection = false;
}]);

app.controller('FeedbackController', ['$scope', function ($scope) {
    $scope.channels = [
        {
            value: "tel", 
            label: "Tel."
        },
        {
            value: "Email",
            label: "Email"
        }
    ];
    $scope.sendFeedback = function () {
        console.log($scope.feedback);
        if ($scope.feedback.agree && !$scope.feedback.myChannel) {
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        } else {
            $scope.invalidChannelSelection = false;
            $scope.feedback = getPristineFeedback();
            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        }
    };
}]);