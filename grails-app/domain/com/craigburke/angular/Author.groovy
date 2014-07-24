package com.craigburke.angular

class Author {
    String firstName
    String lastName

    static constraints = {
        firstName(blank: false)
        lastName(blank: false)
    }

}
