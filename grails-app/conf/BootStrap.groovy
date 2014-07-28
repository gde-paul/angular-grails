import com.craigburke.angular.Author

class BootStrap {

    def init = { servletContext ->
        new Author(firstName: 'Craig', lastName: 'Burke').save()

    }
    def destroy = {
    }
}
