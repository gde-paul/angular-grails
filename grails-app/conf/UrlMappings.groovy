class UrlMappings {

	static mappings = {

        "/books"(view:'books')
        "/api/book"(resources: 'book')

        "/authors"(view:'authors')
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
