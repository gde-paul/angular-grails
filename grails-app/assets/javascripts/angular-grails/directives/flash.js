//= require_self
//= require_tree angular-grails/directives/flash

'use strict';

var flashDirectives = angular.module('angularGrails.directives.flash', ['angularGrails.services']);

flashDirectives.directive('flashMessage', function(flash) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {},
        link: function($scope) {
            $scope.getMessageClass = function(type) {
                switch(type) {
                    case flash.TYPES.ERROR:
                        return "alert-danger";
                    case flash.TYPES.WARN:
                        return "alert-warning";
                    default:
                        return "alert-" + type;
                }
            };

            $scope.isList = function(message) {
                return (message instanceof Array);
            };

            $scope.close = function() {
                flash.clear();
            };

            var loadMessage = function() {
                $scope.flash = flash.get();
            };

            $scope.$on('$destroy', function () {
                flash.clear();
            });

            $scope.$on('flash:messageChange', loadMessage);

            loadMessage();
        },
        templateUrl: 'flash-message.html'

    }
});