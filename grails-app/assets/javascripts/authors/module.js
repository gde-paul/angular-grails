//= require_self
//= require_tree /example-app/authors

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
                    items: function($route, CrudService) {
                        var params = $route.current.params;
                        return CrudService.list(params);
                    }
                }
            })
            .when('/create', {
                controller: 'DefaultCreateEditCtrl',
                templateUrl: 'create-edit.html',
                resolve: {
                    item: function(CrudService) {
                        return CrudService.create();
                    }
                }
            })
            .when('/edit/:id', {
                controller: 'DefaultCreateEditCtrl',
                templateUrl: 'create-edit.html',
                resolve: {
                    item: function($route, CrudService) {
                        var id = $route.current.params.id;
                        return CrudService.get(id);
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
