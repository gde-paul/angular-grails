function CreateEditCtrl($scope, item, authors) {
    $scope.item = item;
    $scope.authors = authors;
}

angular.module('exampleApp.books.controllers', ['angularGrails'])
    .controller('CreateEditCtrl', CreateEditCtrl);

