//= require_self
//= require controllers
//= require services
//= require /authors/services
//= require_tree /templates/example-app/books

'use strict';

angular.module('exampleApp.books', [
    'angularGrails',
    'exampleApp.authors.services',
    'exampleApp.books.controllers',
    'exampleApp.books.services'
])
    .value('defaultResourceName', 'BookResource')
    .config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'DefaultListCtrl as ctrl',
            templateUrl: 'list.html',
            resolve: {
                items: function($route, BookResource) {
                    var params = $route.current.params;
                    return BookResource.list(params);
                }
            }
        })
        .when('/create', {
            controller: 'CreateEditCtrl as ctrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function(BookResource) {
                    return BookResource.create();
                },
                authors: function(AuthorResource) {
                    return AuthorResource.list().then(function(response) {
                        return response.items;
                    });
                }
            }
        })
        .when('/edit/:id', {
            controller: 'CreateEditCtrl as ctrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function($route, BookResource) {
                    var id = $route.current.params.id;
                    return BookResource.get(id);
                },
                authors: function(AuthorResource) {
                    return AuthorResource.list();
                }
            }
        })
        .when('/show/:id', {
            controller: 'DefaultShowCtrl as ctrl',
            templateUrl: 'show.html',
            resolve: {
                item: function($route, BookResource) {
                    var id = $route.current.params.id;
                    return BookResource.get(id);
                }
            }
        })
        .otherwise({redirectTo: '/'});
});