//= require_self
//= require_tree angular-grails/directives/buttons

'use strict';

function crudButton($location, CrudService, FlashService, resourceName) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            crudButton: '@',
            resource: '=',
            isDisabled: '=',
            afterAction: '&'
        },
        link: function ($scope) {

            var createFn = function () {
                $location.path("/create");
                if ($scope.afterAction) {
                    $scope.afterAction();
                }
            };

            var editFn = function () {
                $location.path("/edit/" + $scope.resource.id);
                if ($scope.afterAction) {
                    $scope.afterAction();
                }
            };

            var saveFn = function () {
                var errorFunction = function (data) {
                    var messages = [];
                    angular.forEach(data.data.errors, function (error) {
                        messages.push(error.message);
                    });

                    FlashService.error(messages);
                };

                if ($scope.resource.id) {
                    CrudService.update($scope.resource,
                        function (response) {
                            $location.path('/show/' + response.id);
                            if ($scope.afterAction) {
                                $scope.afterAction();
                            }
                            $scope.$on('$destroy', function () {
                                FlashService.success(resourceName + " was updated");
                            });
                        },
                        errorFunction)
                }
                else {
                    CrudService.save($scope.resource,
                        function (response) {
                            $location.path('/show/' + response.id);
                            if ($scope.afterAction) {
                                $scope.afterAction();
                            }
                            $scope.$on('$destroy', function () {
                                FlashService.success(resourceName + " was saved");
                            });
                        },
                        errorFunction)
                }
            };

            var deleteFn = function () {
                var successFn = function () {
                    FlashService.success(resourceName + ' was successfully deleted');
                    if ($scope.afterAction) {
                        $scope.afterAction();
                    }
                };

                var errorFn = function () {
                    FlashService.error("Couldn't delete " + resourceName);
                };

                CrudService.delete($scope.resource.id, successFn, errorFn);
            };

            var cancelFn = function () {
                FlashService.clear();
                $location.path("/");
                if ($scope.afterAction) {
                    $scope.afterAction();
                }
            };

            $scope.onClick = function () {
                switch ($scope.crudButton) {
                    case "create" :
                        createFn();
                        break;
                    case "edit" :
                        editFn();
                        break;
                    case "delete" :
                        deleteFn();
                        break;
                    case "save" :
                        saveFn();
                        break;
                    case "cancel" :
                        cancelFn();
                        break;
                }
            }
        },
        templateUrl: function (element, attrs) {
            switch (attrs.crudButton) {
                case "create":
                    return "create-button.html";
                case "edit":
                    return "edit-button.html";
                case "delete":
                    return "delete-button.html";
                case "save":
                    return "save-button.html";
                case "cancel":
                    return "cancel-button.html";
            }

        }
    }
}

angular.module('angularGrails.directives.buttons', ['angularGrails.services'])
    .directive('crudButton', crudButton);

