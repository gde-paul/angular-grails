package com.craigburke.angular

class Book {

    String title
    Author author
    Date publishDate
    Integer pageCount
    Float price

    static constraints = {
        title(blank: false)
    }

}
