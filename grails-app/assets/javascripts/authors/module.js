//= require_self
//= require_tree example-app/authors

'use strict';

angular.module('exampleApp.authors', ['angularGrails'])
    .constant('restUrl', '/api/author')
    .constant('resourceName', 'Author')
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'DefaultListCtrl',
                templateUrl: 'list.html',
                resolve: {
                    items: function($route, crudService) {
                        var params = $route.current.params;
                        return crudService.list(params);
                    }
                }
            })
            .when('/create', {
                controller: 'DefaultCreateEditCtrl',
                templateUrl: 'create-edit.html',
                resolve: {
                    item: function(crudService) {
                        return crudService.create();
                    }
                }
            })
            .when('/edit/:id', {
                controller: 'DefaultCreateEditCtrl',
                templateUrl: 'create-edit.html',
                resolve: {
                    item: function($route, crudService) {
                        var id = $route.current.params.id;
                        return crudService.get(id);
                    }
                }
            })
            .when('/show/:id', {
                controller: 'DefaultShowCtrl',
                templateUrl: 'show.html',
                resolve: {
                    item: function($route, crudService) {
                        var id = $route.current.params.id;
                        return crudService.get(id);
                    }
                }
            })
            .otherwise({redirectTo: '/'});
    });
