package com.craigburke.angular.pages.book

import geb.Page

class BookCreatePage extends Page {

    static url = "book#/create"

    static at = { $('h2').text() == 'Create Book' }

    static content = {
        bookTitle {$("input[ng-model='ctrl.item.title']")}
        author {$("select[ng-model='ctrl.item.author']")}
        price {$("input[ng-model='ctrl.item.price']")}
        publishDate {$("input[ng-model='ctrl.item.publishDate']")}
        pageCount {$("input[ng-model='ctrl.item.pageCount']")}

        saveButton { $('button[crud-button="save"]') }
        cancelButton { $('a[crud-button="cancel"]') }
        errorMessage(wait: true) { $(".alert-danger") }
    }
}
