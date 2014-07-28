package com.craigburke.angular.pages.book

import geb.Page

class BookShowPage extends Page {

    static at = { $('h2').text().startsWith 'Show Book' }

    static content = {
        successMessage { $(".alert-success") }
    }

}
