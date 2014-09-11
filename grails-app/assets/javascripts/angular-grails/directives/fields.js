//= require_self
//= require_tree /templates/angular-grails/directives/fields

'use strict';

function dateField() {
    return {
        replace: true,
        link: function($scope) {

            $scope.open = function() {
                $scope.opened = true;
            };

        },
        templateUrl: 'date-field.html'
    }
}

angular.module('angularGrails.directives.fields', ['ui.bootstrap'])
    .directive("dateField", dateField);