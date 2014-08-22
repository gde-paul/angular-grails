//= require_self
//= require controllers
//= require_tree /example-app/books

'use strict';

angular.module('exampleApp.books', ['angularGrails', 'exampleApp.books.controllers'])
    .constant('restUrl', '/api/book')
    .constant('resourceName', 'Book')
    .config(function($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'DefaultListCtrl',
            templateUrl: 'list.html',
            resolve: {
                items: function($route, CrudService) {
                    var params = $route.current.params;
                    return CrudService.list(params);
                }
            }
        })
        .when('/create', {
            controller: 'CreateEditCtrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function(CrudService) {
                    return CrudService.create();
                },
                authors: function(rootUrl, $q, $http) {
                    var deferred = $q.defer();

                    $http.get(rootUrl + '/api/author').success(function(data) {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            }
        })
        .when('/edit/:id', {
            controller: 'CreateEditCtrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function($route, CrudService) {
                    var id = $route.current.params.id;
                    return CrudService.get(id);
                },
                authors: function(rootUrl,  $q, $http) {
                    var deferred = $q.defer();

                    $http.get(rootUrl + '/api/author').success(function(data) {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            }
        })
        .when('/show/:id', {
            controller: 'DefaultShowCtrl',
            templateUrl: 'show.html',
            resolve: {
                item: function($route, CrudService) {
                    var id = $route.current.params.id;
                    return CrudService.get(id);
                }
            }
        })
        .otherwise({redirectTo: '/'});
});