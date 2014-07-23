//= require_self
//= require_tree angular-grails/directives/buttons

'use strict';

var buttonsDirectives = angular.module('angularGrails.directives.buttons', ['angularGrails.services']);

buttonsDirectives.directive('crudButton', function(crudService, $location, resourceName, flash) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            crudButton: '@',
            resource: '=',
            afterAction: '&'
        },
        link: function($scope) {

            var createFn = function() {
                $location.path("/create");
                if ($scope.afterAction) { $scope.afterAction(); }
            };

            var editFn = function() {
                $location.path("/edit/" + $scope.resource.id);
                if ($scope.afterAction) { $scope.afterAction(); }
            };

            var saveFn = function() {
                var errorFunction = function(data) {
                    var messages = [];
                    angular.forEach(data.data.errors, function(error) {
                        messages.push(error.message);
                    });

                    flash.error(messages);
                };

                if ($scope.resource.id) {
                    crudService.update($scope.resource,
                        function(response) {
                            $location.path('/show/' + response.id);
                            if ($scope.afterAction) { $scope.afterAction(); }
                            $scope.$on('$destroy', function () {
                                flash.success(resourceName + " was updated");
                            });
                        },
                        errorFunction)
                }
                else {
                    crudService.save($scope.resource,
                        function(response) {
                            $location.path('/show/' + response.id);
                            if ($scope.afterAction) { $scope.afterAction(); }
                            $scope.$on('$destroy', function () {
                                flash.success(resourceName + " was saved");
                            });
                        },
                        errorFunction)
                }
            };

            var deleteFn = function() {
                var successFn = function() {
                    flash.success(resourceName + ' was successfully deleted');
                    if ($scope.afterAction) { $scope.afterAction(); }
                };

                var errorFn = function() {
                    flash.error("Couldn't delete " + resourceName);
                };

                crudService.delete($scope.resource.id, successFn, errorFn);
            };

            var cancelFn = function() {
                flash.clear();
                $location.path("/");
                if ($scope.afterAction) { $scope.afterAction(); }
            };

            $scope.onClick = function() {
                switch ($scope.crudButton) {
                    case "create" : createFn(); break;
                    case "edit" : editFn(); break;
                    case "delete" : deleteFn(); break;
                    case "save" : saveFn(); break;
                    case "cancel" : cancelFn(); break;
                }
            }
        },
        templateUrl: function(element, attrs) {
            switch(attrs.crudButton) {
                case "create": return "create-button.html";
                case "edit": return "edit-button.html";
                case "delete": return "delete-button.html";
                case "save": return "save-button.html";
                case "cancel": return "cancel-button.html";
            }

        }
    }
});


