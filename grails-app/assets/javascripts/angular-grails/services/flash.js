'use strict';

function FlashService($rootScope) {
    var MESSAGE_TYPE = {
        ERROR: 'error',
        SUCCESS: 'success',
        INFO: 'info',
        WARN: 'warn'
    };

    var _message = null;

    var broadcastChange = function() {
        $rootScope.$broadcast('flash:messageChange');
    };

    var clearMessage = function() {
        _message = null;
        broadcastChange();
    }

    var setMessage = function(message, title, type) {
        _message = {message: message, title: title, type: type};
        broadcastChange();
    };

    var getDefault = function(value, defaultValue) {
        return (typeof value === 'undefined') ? defaultValue : value;
    };

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
}

angular.module('angularGrails.services.flash', [])
    .factory('FlashService', FlashService);