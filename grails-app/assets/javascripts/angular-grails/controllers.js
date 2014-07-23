var controllers = angular.module('angularGrails.controllers', []);

controllers.controller('DefaultListCtrl', function($scope, crudService, items, pageSize) {
    $scope.items = items;
    $scope.pageSize = pageSize;
    $scope.page = 1;

    $scope.load = function() {
        var params = {page: $scope.page};

        if ($scope.sort) {
            angular.extend(params, $scope.sort);
        }

        crudService.list(params).then(function(items) {
            $scope.items = items;
        });
    };

    $scope.reload = function() {
        $scope.page = 1;
        $scope.load();
    }
});

controllers.controller('DefaultShowCtrl', function($scope, item) {
    $scope.item = item;
});

controllers.controller('DefaultCreateEditCtrl', function($scope, item) {
    $scope.item = item;
});
