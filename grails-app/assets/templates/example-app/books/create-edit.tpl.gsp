<%@ Page import="com.craigburke.angular.Book" %>

<h2>
    <span ng-hide="item.id">Create Book</span>
    <span ng-show="item.id">Edit Book: {{item.title}}</span>
</h2>

<div flash-message ></div>

<form name="form" class="form-horizontal" role="form" novalidate>
    <f:with bean="${new Book()}">
        <f:field property="title" input-ng-model="item.title" />
        <f:field property="author" input-ng-model="item.author" input-ng-options="author as author.lastName for author in authors track by author.id"  />
        <f:field property="price" input-ng-model="item.price"  />
        <f:field property="publishDate" input-ng-model="item.publishDate" />
        <f:field property="pageCount" input-ng-model="item.pageCount"  />
    </f:with>

    <div>
        <button crud-button="save" resource="item"></button>
        <button crud-button="cancel"></button>
    </div>

</form>

