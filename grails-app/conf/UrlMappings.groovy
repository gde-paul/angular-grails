class UrlMappings {

	static mappings = {
		"/book"(view:'book')
        "/api/book"(resources: 'book')

        "/author"(view:'author')
        "/api/author"(resources: 'author')

        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
