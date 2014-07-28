//= require_self
//= require_tree angular-grails/directives/sort

'use strict';

function sortHeader() {
    return {
        restrict: 'EA',
        replace: false,
        require: 'ngModel',
        scope: {
            onSort: '&'
        },
        link: function($scope, $element, $attrs, ngModel) {
            $scope.$watch('sort', function() {
                ngModel.$setViewValue($scope.sort);
                if ($scope.onSort) {
                    $scope.onSort();
                }
            });
        },
        controller: function($scope) {
            $scope.sort = {sort: undefined, order: undefined};

            this.setSort = function(sort) {
                $scope.sort = sort;
            };

            this.currentSort = function() {
                return $scope.sort;
            };

            return this;
        }
    }
}

function sortableColumn() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            title: '@',
            property: '@'
        },
        require: '^sortHeader',
        link: function($scope, $element, $attrs, sortHeader) {
            $scope.order = "asc";

            $scope.isActive = function() {
                return (sortHeader.currentSort().sort === $scope.property);
            };

            $scope.sort = function() {
                $scope.order = ($scope.order == "asc") ? "desc" : "asc";
                sortHeader.setSort({sort: $scope.property, order: $scope.order});
            }
        },
        templateUrl: 'sortable-column.html'
    }
}

angular.module('angularGrails.directives.sort', [])
    .directive('sortHeader', sortHeader)
    .directive('sortableColumn', sortableColumn);