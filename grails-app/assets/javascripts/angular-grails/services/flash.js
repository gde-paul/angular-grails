'use strict';

function FlashService($rootScope) {
    var FlashService = {};

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

    FlashService.TYPES = MESSAGE_TYPE;

    FlashService.error = function(message, title) {
        title = getDefault(title, "Error");
        setMessage(message, title, MESSAGE_TYPE.ERROR);
    };

    FlashService.success = function(message, title) {
        title = getDefault(title, "Success");
        setMessage(message, title, MESSAGE_TYPE.SUCCESS);
    };

    FlashService.info = function(message, title) {
        title = getDefault(title, "Info");
        setMessage(message, title, MESSAGE_TYPE.INFO);
    };

    FlashService.warn = function(message, title) {
        title = getDefault(title, "Warning");
        setMessage(message, title, MESSAGE_TYPE.WARN);
    };

    FlashService.set = function(message, title, type) {
        title = getDefault(title, "Info");
        type = getDefault(type, MESSAGE_TYPE.INFO);
        setMessage(message, title, type);
    };

    FlashService.get = function() {
        return _message;
    };

    FlashService.clear = function() {
        clearMessage();
    };

    return FlashService;
}

angular.module('angularGrails.services.flash', [])
    .factory('FlashService', FlashService);