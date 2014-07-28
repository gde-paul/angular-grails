package com.craigburke.angular

import com.craigburke.angular.pages.author.*
import geb.spock.GebReportingSpec

class AuthorFunctionalSpec extends GebReportingSpec {

    def "should be able to view list page"() {
        when:
        to AuthorListPage

        then:
        at AuthorListPage
    }

    def "should be able to create a valid Author"() {
        when:
        to AuthorListPage

        and:
        createButton.click()

        then:
        at AuthorCreatePage

        when:
        saveButton.click()

        then:
        at AuthorCreatePage

        when:
        firstName = "Foo"
        lastName = "Bar"

        and:
        saveButton.click()

        then:
        at AuthorShowPage

        and:
        successMessage.displayed

        and:
        successMessage.text().contains "Author was saved"
    }

    def "should be able to edit an author"() {
        when:
        to AuthorListPage

        and:
        rows.find {it.name == "Foo Bar"}.editButton.click()

        then:
        at AuthorEditPage

        when:
        firstName = ""

        and:
        saveButton.click()

        then:
        at AuthorEditPage

        when:
        firstName = "Foo"
        lastName = "Bar!"

        and:
        saveButton.click()

        then:
        at AuthorShowPage

        and:
        successMessage.displayed

        and:
        successMessage.text().contains "Author was updated"
    }


    def "should be able to delete an author"() {
        when:
        to AuthorListPage

        and:
        rows.find {it.name == "Foo Bar!" }.deleteButton.click()

        then:
        at AuthorListPage

        and:
        successMessage.displayed

        and:
        successMessage.text().contains "Author was successfully deleted"
    }

}