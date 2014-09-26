package com.craigburke.angular.pages.author

import geb.Page

class AuthorEditPage extends Page {

    static at = { $('h2').text().startsWith 'Edit Author' }

    static content = {
        firstName {$("input[name='firstName']")}
        lastName {$("input[name='lastName']")}
        saveButton { $('button[crud-button="save"]') }
        cancelButton { $('a[crud-button="cancel"]') }
        errorMessage(wait: true) { $(".alert-danger") }
    }
}
