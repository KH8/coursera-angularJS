"use strict";

var options = ["", "appetizer", "mains", "dessert"];

function getPristineFeedback() {
    return {
        myChannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
    };
}

var app = angular.module('confusionApp');
app.controller("MenuController", ["$scope", "dishesService", function ($scope, dishesService) {
    $scope.tab = 0;
    $scope.filterText = options[$scope.tab];
    $scope.showDetails = false;

    $scope.dishes = [];
    dishesService.getDishes().then(function (response) {
        $scope.dishes = response.data;
    });

    $scope.select = function (index) {
        $scope.tab = index;
        $scope.filterText = options[$scope.tab];
    };

    $scope.isSelected = function (index) {
        return index === $scope.tab;
    };

    $scope.toggleShowDetails = function () {
        $scope.showDetails = !$scope.showDetails;
    };
}]);

app.controller("DishDetailController", ["$scope", "$stateParams", "dishesService", function($scope, $stateParams, dishesService) {
    $scope.dish = {};
    dishesService.getDish(parseInt($stateParams.id, 10)).then(function (response) {
        $scope.dish = response.data;
        $scope.showDish = true;
    });
    
    $scope.range = function(n) {
        return new Array(n);
    };
    $scope.orderBy = "rating";
}]);

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

app.controller('IndexController', ['$scope', "corporateService", "dishesService", function ($scope, corporateService, dishesService) {
    $scope.ec = corporateService.getLeader(3);
    $scope.promotion = dishesService.getPromotion(0);

    $scope.selectedDish = {};
    dishesService.getDish(0).then(function (response) {
        $scope.selectedDish = response.data;
        $scope.showDish = true;
    });
}]);

app.controller('AboutController', ['$scope', "corporateService", function ($scope, corporateService) {
    $scope.leaders = corporateService.getLeaders();
}]);