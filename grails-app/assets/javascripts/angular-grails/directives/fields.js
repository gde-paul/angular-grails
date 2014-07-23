'use strict';

var datepickerDirective = angular.module('angularGrails.directives.fields', ['ui.bootstrap']);

datepickerDirective.directive("dateField", function() {
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

});