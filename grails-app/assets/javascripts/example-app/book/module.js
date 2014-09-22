//= require_self
//= require controllers
//= require services
//= require /example-app/author/services
//= require_tree /templates/example-app/book

'use strict';

angular.module('exampleApp.book', [
    'angularGrails',
    'exampleApp.author.services',
    'exampleApp.book.controllers',
    'exampleApp.book.services'
])
.value('defaultCrudResource', 'BookResource')
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
                    return AuthorResource.list();
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