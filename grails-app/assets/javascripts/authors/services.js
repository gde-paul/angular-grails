'use strict';

function AuthorResource(CrudResourceFactory) {
    return CrudResourceFactory('/api/author', 'Author');
}

angular.module('exampleApp.authors.services', ['angularGrails'])
    .factory('AuthorResource', AuthorResource);