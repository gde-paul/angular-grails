var services = angular.module('angularGrails.services', ['angularGrails.constants']);

services.factory('crudService', function($resource, $q, $http, rootUrl, restUrl) {
    var baseUrl = rootUrl + restUrl;

    var resource = $resource(baseUrl + '/:id', {id: '@id'} ,
        {
            'update': { method: 'PUT'}
        }
    );

    var getResourcePromise = function(resourceMethod, successFn, errorFn) {
        return wrapPromise(resourceMethod.$promise, successFn, errorFn);
    };

    var wrapPromise = function(promise, successFn, errorFn) {
        if (successFn && errorFn) {
            promise = promise.then(successFn, errorFn);
        }
        else if (successFn) {
            promise = promise.then(successFn);
        }

        return promise;
    }

    return {
        list: function(params, successFn, errorFn) {
            var deferred = $q.defer();

            resource.query(params, function(items, headers) {
                var count = headers('Content-Range').split('/')[1];
                var data = {items: items, count: count};
                deferred.resolve(data);
            });

            return wrapPromise(deferred.promise, successFn, errorFn);
        },
        get: function(id, successFn, errorFn) {
            return getResourcePromise(resource.get({id: id}, successFn, errorFn));
        },
        create: function(successFn, errorFn) {
            var deferred = $q.defer();

            $http.get(baseUrl + "/create").success(function(data) {
                deferred.resolve(data);
            });

            return wrapPromise(deferred.promise, successFn, errorFn);
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
});

services.factory('flash', function($rootScope) {

        var MESSAGE_TYPE = {
            ERROR: 'error',
            SUCCESS: 'success',
            INFO: 'info',
            WARN: 'warn'
        };

        var _message = null;
        var _messageSeen = false;

        var broadcastChange = function() {
            $rootScope.$broadcast('flash:messageChange');
        };

        var clearMessage = function() {
            _message = null;
            broadcastChange();
        }

        var setMessage = function(message, title, type) {
            _message = {message: message, title: title, type: type};
            _messageSeen = false;
            broadcastChange();
        };

        var getDefault = function(value, defaultValue) {
            return (typeof value === 'undefined') ? defaultValue : value;
        };

        $rootScope.$on('$locationChangeSuccess', function() {
            if (_messageSeen) {
                clearMessage();
            }
            _messageSeen = true;
        });

        return {
            TYPES: MESSAGE_TYPE,
            error: function(message, title) {
                title = getDefault(title, "Error");
                setMessage(message, title, MESSAGE_TYPE.ERROR);
            },
            success: function(message, title) {
                title = getDefault(title, "Success");
                setMessage(message, title, MESSAGE_TYPE.SUCCESS);
            },
            info: function(message, title) {
                title = getDefault(title, "Info");
                setMessage(message, title, MESSAGE_TYPE.INFO);
            },
            warn: function(message, title) {
                title = getDefault(title, "Warning");
                setMessage(message, title, MESSAGE_TYPE.WARN);
            },
            set: function(message, title, type) {
                title = getDefault(title, "Info");
                type = getDefault(type, MESSAGE_TYPE.INFO);
                setMessage(message, title, type);
            },
            get: function() {
                return _message;
            },
            clear: function() {
                clearMessage();
            }
        }
});

