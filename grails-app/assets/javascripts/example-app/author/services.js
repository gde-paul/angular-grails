'use strict';

function AuthorResource(CrudResourceFactory) {
    return CrudResourceFactory('/api/author', 'Author');
}

angular.module('exampleApp.author.services', ['angularGrails'])
    .factory('AuthorResource', AuthorResource);