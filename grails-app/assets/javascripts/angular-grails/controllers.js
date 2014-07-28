function DefaultListCtrl($scope, CrudService, items, pageSize) {
    $scope.items = items;
    $scope.pageSize = pageSize;
    $scope.page = 1;

    $scope.load = function() {
        var params = {page: $scope.page};

        if ($scope.sort) {
            angular.extend(params, $scope.sort);
        }

        CrudService.list(params).then(function(items) {
            $scope.items = items;
        });
    };

    $scope.reload = function() {
        $scope.page = 1;
        $scope.load();
    }
}

function DefaultShowCtrl($scope, item) {
    $scope.item = item;
};

function DefaultCreateEditCtrl($scope, item) {
    $scope.item = item;
}

angular.module('angularGrails.controllers', [])
    .controller('DefaultListCtrl', DefaultListCtrl)
    .controller('DefaultShowCtrl', DefaultShowCtrl)
    .controller('DefaultCreateEditCtrl', DefaultCreateEditCtrl);