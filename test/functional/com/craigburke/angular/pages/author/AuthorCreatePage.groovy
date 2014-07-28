package com.craigburke.angular.pages.author

import geb.Page

class AuthorCreatePage extends Page {

    static url = "authors#/create"

    static at = { $('h2').text() == 'Create Author' }

    static content = {
        firstName {$("input[name='firstName']")}
        lastName {$("input[name='lastName']")}
        saveButton { $('button[crud-button="save"]') }
        cancelButton { $('a[crud-button="cancel"]') }
        errorMessage(wait: true) { $(".alert-danger") }
    }
}
