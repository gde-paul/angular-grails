function CreateEditCtrl(item, authors) {
    var self = this;

    self.item = item;
    self.authors = authors;
}

angular.module('exampleApp.books.controllers', ['angularGrails'])
    .controller('CreateEditCtrl', CreateEditCtrl);

