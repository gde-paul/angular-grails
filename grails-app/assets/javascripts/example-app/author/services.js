'use strict';

function AuthorResource(CrudResourceFactory) {
    return CrudResourceFactory('/api/author', 'Author');
}

angular.module('exampleApp.author.services', ['grails'])
    .factory('AuthorResource', AuthorResource);
