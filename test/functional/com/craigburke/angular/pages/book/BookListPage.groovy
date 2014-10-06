package com.craigburke.angular.pages.book

import geb.Module
import geb.Page

class BookListPage extends Page {

    static url = "book"

    static at = { $('h2').text() == 'Book List' }

    static content = {
        createButton { $('a[crud-button="create"]') }
        rows { moduleList BookListRow, $("table tbody tr") }
        successMessage { $(".alert-success") }
    }

}

class BookListRow extends Module {

    static content = {
        cell { $("td") }
        bookTitle { cell[1].text() }
        editButton {$("a[crud-button='edit']")}
        deleteButton {$("a[crud-button='delete']")}
    }

}