package com.craigburke.angular.pages.book

import geb.Page

class BookEditPage extends Page {

    static at = { $('h2').text().startsWith 'Edit Book' }

    static content = {
        bookTitle {$("input[ng-model='ctrl.item.title']")}
        author {$("select[ng-model='ctrl.item.author']")}
        price {$("input[ng-model='ctrl.item.price']")}
        publishDate {$("div[date-field] input")}
        pageCount {$("input[ng-model='ctrl.item.pageCount']")}

        saveButton { $('button[crud-button="save"]') }
        cancelButton { $('a[crud-button="cancel"]') }
        errorMessage(wait: true) { $(".alert-danger") }
    }
}
