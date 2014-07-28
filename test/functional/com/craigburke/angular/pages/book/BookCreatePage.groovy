package com.craigburke.angular.pages.book

import geb.Page

class BookCreatePage extends Page {

    static url = "book#/create"

    static at = { $('h2').text() == 'Create Book' }

    static content = {
        bookTitle {$("input[ng-model='item.title']")}
        author {$("select[ng-model='item.author']")}
        price {$("input[ng-model='item.price']")}
        publishDate {$("div[date-field] input")}
        pageCount {$("input[ng-model='item.pageCount']")}

        saveButton { $('button[crud-button="save"]') }
        cancelButton { $('a[crud-button="cancel"]') }
        errorMessage(wait: true) { $(".alert-danger") }
    }
}
