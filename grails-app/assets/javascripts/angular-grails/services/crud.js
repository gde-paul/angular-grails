'use strict';

function CrudService($resource, $q, $http, rootUrl, restUrl) {
    var baseUrl = rootUrl + restUrl;

    var resource = $resource(baseUrl + '/:id', {id: '@id'} ,
        { 'update': { method: 'PUT'} }
    );

    var getResourcePromise = function(resourceMethod, successFn, errorFn) {
        return chainPromise(resourceMethod.$promise, successFn, errorFn);
    };

    var chainPromise = function(promise, successFn, errorFn) {
        if (successFn && errorFn) {
            promise = promise.then(successFn, errorFn);
        }
        else if (successFn) {
            promise = promise.then(successFn);
        }

        return promise;
    };

    return {
        list: function(params, successFn, errorFn) {
            var deferred = $q.defer();

            resource.query(params, function(items, headers) {
                var count = headers('Content-Range').split('/')[1];
                var data = {items: items, count: count};
                deferred.resolve(data);
            });

            return chainPromise(deferred.promise, successFn, errorFn);
        },
        get: function(id, successFn, errorFn) {
            return getResourcePromise(resource.get({id: id}, successFn, errorFn));
        },
        create: function(successFn, errorFn) {
            var deferred = $q.defer();

            $http.get(baseUrl + "/create").success(function(data) {
                deferred.resolve(data);
            });

            return chainPromise(deferred.promise, successFn, errorFn);
        },
        delete: function(id, successFn, errorFn) {
            return getResourcePromise(resource.delete({id: id}), successFn, errorFn);
        },
        save: function(data, successFn, errorFn) {
            return getResourcePromise(resource.save(data), successFn, errorFn);
        },
        update: function(data, successFn, errorFn) {
            return getResourcePromise(resource.update(data), successFn, errorFn);
        }
    }
}

angular.module('angularGrails.services.crud', ['angularGrails.constants'])
    .factory('CrudService', CrudService);
