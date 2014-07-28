package com.craigburke.angular.pages.author

import geb.Module
import geb.Page

class AuthorListPage extends Page {

    static url = "authors#/"

    static at = { $('h2').text() == 'Authors' }

    static content = {
        createButton { $('a[crud-button="create"]') }
        rows { moduleList AuthorListRow, $("table tbody tr") }
        successMessage { $(".alert-success") }
    }

}

class AuthorListRow extends Module {

    static content = {
        cell { $("td") }
        name { cell[1].text() }
        editButton {$("a[crud-button='edit']")}
        deleteButton {$("a[crud-button='delete']")}
    }

}