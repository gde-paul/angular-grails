Angular Grails
================================
This is an example app showcasing some of the ways that I use Angular within a Grails project. This is a proof of concept but it should serve as a nice starting point for anyone wanting to use the two frameworks together.

This project also makes use of [Twitter Bootstrap](http://getbootstrap.com/), [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/) and [Font Awesome](http://fortawesome.github.io/Font-Awesome/).

## The Grails AngularController
This is a slightly modified version of the standard Grails RestfulController. It adds support for server side paging and can be used exactly the same way the RestfulController is used.

Here's how you would add a REST controller for the Book domain class:
```groovy
class BookController extends AngularController {
    BookController() {
        super(Book)
    }
}
```
## Grails Plugins

This project makes use of the Asset Pipeline along with two AngularJs specfic asset pipeline plugins that I developed:

* [Angular Template Asset Pipeline](https://github.com/craigburke/angular-template-asset-pipeline)
* [Angular Annotate Asset Pipeline](https://github.com/craigburke/angular-annotate-asset-pipeline)

The Angular Template Asset Pipeline plugin works with the excellent [Fields plugin](https://github.com/gpc/grails-fields), and you'll see that I've made heavy use of that. 

For example, the create-edit template contains the following and provides customized rendering for each data type:

```html
<f:with bean="${new Book()}">
    <f:field property="title" input-ng-model="item.title" />
    <f:field property="author" input-ng-model="item.author" input-ng-options="author as author.lastName for author in authors track by author.id"  />
    <f:field property="price" input-ng-model="item.price"  />
    <f:field property="publishDate" input-ng-model="item.publishDate" />
    <f:field property="pageCount" input-ng-model="item.pageCount"  />
</f:with>
```

## The AngularJS angularGrails module
This project includes an AngularJS module called **angularGrails** that you can include as a dependency in your own angular modules.

### Services

#### crudService 

This is a generalized service used to make REST calls. The constants **rootUrl** and **restUrl** must be set for these methods to work correctly. This service is esentially a wrapper for Angular's own **$resource** module but returns a promise instead of a resource object.

**Config:**
```javascript
    // Modules should be previously defined
    angular.module('angularGrails.constants').constant('rootUrl', '/');
    angular.module('myApp').constant('restUrl', '/api/book');
```

Here's an example of how you might use each available method:

```javascript
// crudService.list
crudService.list({page: 1}).then(function(response) {
  $scope.items = response;
});

// crudService.create
crudService.create().then(function(response) {
  $scope.newItem = response;
});

// crudService.get
crudService.get(1).then(function(response) {
  $scope.currentItem = response;
});

// crudService.update
var item = {id: 1, title: 'Foo Bar'};
crudService.update(item);

// crudService.delete
crudService.delete(1);

```
Each of the above functions can also accept an optional success and error callback function:

```javascript
  var successFunction = function(response) {
    console.log("It worked!");
  };
  
  var errorFunction = function(response) {
    console.log("Uh oh!");
  };
  
  crudService.delete(1, successFunction, errorFunction);

````
#### flash
Used in conjunction with the **flash-message** directive below. This service allows you to easily set different messages in your app. Each time a flash message is set it overrides the previous one.

```javascript
  flash.success("Everything is fine");
  flash.warning("Something bad is about to happen");
  flash.error("Uh oh, something bad did happen");
  flash.info("Something good or bad might happen");
  flash.clear(); // Clear messages

```

### Directives

#### crudButton
This directive allows you to add buttons that make use of the **crudService.** 

The click actions of these buttons are automatically set to make the appropriate crudService method call. For example, clicking the delete button will call the crudService.delete method.


```html
<button crud-button="delete" resource="item" ></button>
<button crud-button="edit" resource="item" ></button>
<button crud-button="save" resource="item" ></button>
<button crud-button="create" ></button>
<button crud-button="cancel" ></button>
```

You can also include an optional **afterAction** parameter to register a callback

```html
<button crud-button="delete" resource="item" after-action="logDelete()"></button>
```

The button templates are located at:
`/grails-app/assets/templates/angular-grails/directives/buttons`

#### flashMessage
This directive is used along with the **flash** service above to display messages on the page. 
```html
<div flash-message></div>
```

The flash message template is located at:
`/grails-app/assets/templates/angular-grails/directives/flash-message.tpl.html`

#### sortHeader / sortableColumn
This directive allows you to keep track of the current sort state of a table, and has an onSort callback to allow you to reload your data if need be.

```html
<thead sort-header ng-model="sort" on-sort="reloadData()">
    <th sortable-column title="Id" property="id"></th>
    <th sortable-column title="Name" property="lastName"></th>
</thead>
```

The sortable column template is located at:
`/grails-app/assets/templates/angular-grails/directives/sortable-column.tpl.html`

