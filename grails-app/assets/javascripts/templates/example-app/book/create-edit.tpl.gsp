<%@ Page import="com.craigburke.angular.Book" %>

<h2>
    <span ng-hide="ctrl.item.id">Create Book</span>
    <span ng-show="ctrl.item.id">Edit Book: {{ctrl.item.title}}</span>
</h2>

<div flash-message ></div>

<form name="form" class="form-horizontal" role="form" novalidate>
    <f:with bean="${new Book()}">
        <f:field property="title" input-ng-model="ctrl.item.title" />
        <f:field property="author" input-ng-model="ctrl.item.author" input-ng-options="author.firstName + ' ' + author.lastName for author in ctrl.authors track by author.id"  />
        <f:field property="price" input-ng-model="ctrl.item.price"  />
        <f:field property="publishDate" input-ng-model="ctrl.item.publishDate" />
        <f:field property="pageCount" input-ng-model="ctrl.item.pageCount"  />
    </f:with>

    <div>
        <button crud-button="save" item="ctrl.item" is-disabled="form.$invalid"></button>
        <button crud-button="cancel"></button>
    </div>

</form>

