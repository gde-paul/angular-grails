//= require_self
//= require services
//= require_tree /templates/${modulePath}

'use strict';
angular.module('${moduleName}', ['${baseModule}', '${moduleName}.services'])
.value('defaultCrudResource', '${resourceName}')
.config(function(<%='$routeProvider'%>) {
<%='$routeProvider'%>
        .when('/', {
            controller: 'DefaultListCtrl as ctrl',
            templateUrl: 'list.html',
            resolve: {
                items: function(\$route, ${resourceName}) {
                    var params = \$route.current.params;
                    return ${resourceName}.list(params);
                }
            }
        })
        .when('/create', {
            controller: 'DefaultCreateEditCtrl as ctrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function(${resourceName}) {
                    return ${resourceName}.create();
                }
            }
        })
        .when('/edit/:id', {
            controller: 'DefaultCreateEditCtrl as ctrl',
            templateUrl: 'create-edit.html',
            resolve: {
                item: function(\$route, ${resourceName}) {
                    var id = \$route.current.params.id;
                    return ${resourceName}.get(id);
                }
            }
        })
        .when('/show/:id', {
            controller: 'DefaultShowCtrl as ctrl',
            templateUrl: 'show.html',
            resolve: {
                item: function(\$route, ${resourceName}) {
                    var id = \$route.current.params.id;
                    return ${resourceName}.get(id);
                }
            }
        })
        .otherwise({redirectTo: '/'});
});
