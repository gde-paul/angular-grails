//= require_self
//= require services
//= require_tree /example-app/book/templates/

'use strict';
angular.module('exampleApp.book', ['grails', 'exampleApp.book.services'])
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
            controller: 'DefaultCreateEditCtrl as ctrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function(BookResource) {
                    return BookResource.create();
                }
            }
        })
        .when('/edit/:id', {
            controller: 'DefaultCreateEditCtrl as ctrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function($route, BookResource) {
                    var id = $route.current.params.id;
                    return BookResource.get(id);
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
