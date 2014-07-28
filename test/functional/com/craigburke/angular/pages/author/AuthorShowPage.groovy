package com.craigburke.angular.pages.author

import geb.Page

class AuthorShowPage extends Page {

    static at = { $('h2').text().startsWith 'Show Author' }

    static content = {
        successMessage { $(".alert-success") }
    }

}
