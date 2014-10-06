package com.craigburke.angular.pages.author

import geb.Module
import geb.Page

class AuthorListPage extends Page {

    static url = "author"

    static at = { $('h2').text() == 'Author List' }

    static content = {
        createButton { $('a[crud-button="create"]') }
        rows { moduleList AuthorListRow, $("table tbody tr") }
        successMessage { $(".alert-success") }
    }

}

class AuthorListRow extends Module {

    static content = {
        cell { $("td") }
        firstName { cell[1].text() }
		lastName { cell[2].text() }
        editButton {$("a[crud-button='edit']")}
        deleteButton {$("a[crud-button='delete']")}
    }

}