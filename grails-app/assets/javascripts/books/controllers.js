var controllers = angular.module('exampleApp.books.controllers', ['angularGrails']);

controllers.controller('CreateEditCtrl', function($scope, item, authors) {
    $scope.item = item;
    $scope.authors = authors;
});