'use strict';

function ${resourceName}(CrudResourceFactory) {
    return CrudResourceFactory('${resourceUrl}', '${resourceName}');
}

angular.module('${moduleName}.services', ['angularGrails'])
    .factory('${resourceName}', ${resourceName});
