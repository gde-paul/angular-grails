'use strict';

function dateField() {
    return {
        scope: {
            ngModel: '='
        },
        replace: true,
        link: function($scope) {
            $scope.open = function(event) {
                event.preventDefault();
                event.stopPropagation();
                $scope.opened = true;
            };

        },
        templateUrl: 'date-field.html'
    }
}

angular.module('angularGrails.directives.fields', ['ui.bootstrap'])
    .directive("dateField", dateField);