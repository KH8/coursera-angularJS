"use strict";

var options = ["", "appetizer", "mains", "dessert"];

var app = angular.module("confusionApp", []);
app.controller("MenuController", ["$scope", "dishesService", function ($scope, dishesService) {
    $scope.tab = 0;
    $scope.filterText = options[$scope.tab];
    $scope.showDetails = false;

    $scope.dishes = dishesService.getDishes();

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

app.controller("DishDetailController", ["$scope", "dishesService", function($scope, dishesService) {
    $scope.dish = dishesService.getDish(3);
    $scope.range = function(n) {
        return new Array(n);
    };
    $scope.orderBy = "rating";
}]);