function CreateEditCtrl(item, authors) {
    var self = this;

    self.item = item;
    self.authors = authors;
}

angular.module('exampleApp.book.controllers', ['grails'])
    .controller('CreateEditCtrl', CreateEditCtrl);