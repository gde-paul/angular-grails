package com.craigburke.angular

import com.craigburke.angular.pages.book.*
import geb.spock.GebReportingSpec

class BookFunctionalSpec extends GebReportingSpec {

    def "should be able to view list page"() {
        given:

        when:
        to BookListPage

        then:
        at BookListPage
    }

    def "should be able to create a valid Book"() {
        when:
        to BookListPage

        and:
        createButton.click()

        then:
        at BookCreatePage

        when:
        saveButton.click()

        then:
        at BookCreatePage

        when:
        bookTitle = "New Book"
        author = "Craig Burke"
        price = "33"
        publishDate = "2015-01-01"
        pageCount = 100

        and:
        saveButton.click()

        then:
        waitFor { at BookShowPage }

        and:
        successMessage.displayed

        and:
        successMessage.text().contains "Book was saved"
    }

    def "should be able to edit a Book"() {
        when:
        to BookListPage

        and:
        rows[0].editButton.click()

        then:
        waitFor { at BookEditPage }

        when:
        bookTitle = ""

        and:
        saveButton.click()

        then:
        at BookEditPage

        when:
        bookTitle = "Foo Book"

        and:
        saveButton.click()

        then:
        waitFor { at BookShowPage }

        and:
        successMessage.displayed

        and:
        successMessage.text().contains "Book was updated"
    }


    def "should be able to delete a Book"() {
        when:
        to BookListPage

        and:
        rows[0]?.deleteButton.click()

        then:
        at BookListPage

        and:
        successMessage.displayed

        and:
        successMessage.text().contains "Book was successfully deleted"
    }

}