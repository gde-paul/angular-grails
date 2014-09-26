'use strict';

function BookResource(CrudResourceFactory) {
    return CrudResourceFactory('/api/book', 'Book');
}

angular.module('exampleApp.book.services', ['grails'])
    .factory('BookResource', BookResource);
