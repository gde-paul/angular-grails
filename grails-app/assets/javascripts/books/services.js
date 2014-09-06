'use strict';

function BookResource(CrudResourceFactory) {
    return CrudResourceFactory('/api/book', 'Book');
}

angular.module('exampleApp.books.services', ['angularGrails'])
    .factory('BookResource', BookResource);