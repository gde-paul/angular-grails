//= require_self
//= require services
//= require_tree /templates/example-app/author

'use strict';
angular.module('exampleApp.author', ['angularGrails', 'exampleApp.author.services'])
.value('defaultCrudResource', 'AuthorResource')
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'DefaultListCtrl as ctrl',
            templateUrl: 'list.html',
            resolve: {
                items: function($route, AuthorResource) {
                    var params = $route.current.params;
                    return AuthorResource.list(params);
                }
            }
        })
        .when('/create', {
            controller: 'DefaultCreateEditCtrl as ctrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function(AuthorResource) {
                    return AuthorResource.create();
                }
            }
        })
        .when('/edit/:id', {
            controller: 'DefaultCreateEditCtrl as ctrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function($route, AuthorResource) {
                    var id = $route.current.params.id;
                    return AuthorResource.get(id);
                }
            }
        })
        .when('/show/:id', {
            controller: 'DefaultShowCtrl as ctrl',
            templateUrl: 'show.html',
            resolve: {
                item: function($route, AuthorResource) {
                    var id = $route.current.params.id;
                    return AuthorResource.get(id);
                }
            }
        })
        .otherwise({redirectTo: '/'});
});
