class UrlMappings {

	static mappings = {

        
		
		'/author'(view: 'author')
		'/api/author'(resources: 'author')

		'/book'(view: 'book')
		'/api/book'(resources: 'book')

		"/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
